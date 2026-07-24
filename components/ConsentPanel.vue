<template>
    <ClientOnly>
        <div v-if="shouldShowPanel" class="consent-panel">

            <LayoutContainer class="consent-panel__container">
                <div class="consent-panel__text-wrapper">
                    <UIHeading :level="6" :tag="'div'" class="pb-1">{{ translations.consentPanelTitle }}</UIHeading>
                    <UIParagraph class="pb-6 xl:pb-0">{{ translations.consentPanelDescription }}</UIParagraph>
                </div>
                <div class="consent-panel__actions">
                    <UIButton @click="allowCookies">{{ translations.consentPanelButtonAccept }}</UIButton>
                    <UIButton styleName="muted" @click="reject">{{ translations.consentPanelButtonReject }}</UIButton>
                </div>
            </LayoutContainer>

        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
const { initialize, disableAnalytics } = useGtag()

type ConsentValue = 'accepted' | 'rejected'
type StoredConsent = {
    value: ConsentValue
    rejectedAt?: number
}

const CONSENT_STORAGE_KEY = 'cookie_consent'
const REJECT_REPROMPT_DAYS = 60
const REJECT_REPROMPT_MS = REJECT_REPROMPT_DAYS * 24 * 60 * 60 * 1000
const panelVisible = ref(true)

const saveConsent = (value: ConsentValue) => {
    const payload: StoredConsent = {
        value,
        ...(value === 'rejected' ? { rejectedAt: Date.now() } : {}),
    }

    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload))
}

const readConsent = (): ConsentValue | null => {
    const rawValue = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!rawValue) {
        return null
    }

    if (rawValue === 'accepted' || rawValue === 'rejected') {
        return rawValue
    }

    try {
        const parsed = JSON.parse(rawValue) as StoredConsent
        if (parsed.value === 'accepted') {
            return 'accepted'
        }

        if (parsed.value === 'rejected') {
            const rejectedAt = parsed.rejectedAt ?? 0
            if (Date.now() - rejectedAt >= REJECT_REPROMPT_MS) {
                localStorage.removeItem(CONSENT_STORAGE_KEY)
                return null
            }

            return 'rejected'
        }
    } catch {
        localStorage.removeItem(CONSENT_STORAGE_KEY)
    }

    return null
}

const allowCookies = () => {
    saveConsent('accepted')
    initialize()
    closePanel()
}

const reject = () => {
    saveConsent('rejected')
    disableAnalytics()
    closePanel()
}

const closePanel = () => {
    panelVisible.value = false
}

const shouldShowPanel = computed(() => {
    return panelVisible.value
})

const translations = computed(() => {
    return {
        consentPanelTitle: 'Cookie Consent',
        consentPanelDescription: 'Website utilize cookies to enhance your browsing experience, analyze website traffic, and personalize content. You have the option to manage your cookie preferences. By clicking "Accept all cookies", you agree with storeing cookies on your device.',
        consentPanelButtonAccept: 'Accept all cookies',
        consentPanelButtonReject: 'Reject All',
    }
})

onBeforeMount(() => {
    const consentValue = readConsent()

    if (consentValue === 'accepted') {
        initialize()
        panelVisible.value = false
        return
    }

    if (consentValue === 'rejected') {
        disableAnalytics()
        panelVisible.value = false
        return
    }

    panelVisible.value = true
})

</script>

<style scoped lang="scss">
.consent-panel {
    @apply fixed w-full bottom-0 xl:bottom-5 xl:left-[50%] xl:translate-x-[-50%];

    &__container {
        @apply flex flex-col xl:flex-row py-6 bg-gray-200 shadow-2xl shadow-primary-400 md:rounded-xl xl:p-6;
    }

    &__text-wrapper {
        @apply xl:w-7/12;
    }

    &__actions {
        @apply flex flex-col gap-3 xl:w-5/12 xl:flex xl:justify-end xl:items-center xl:gap-4 xl:flex-row;
    }
}
</style>

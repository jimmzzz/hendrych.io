<template>
    <ClientOnly v-if="shouldShowPanel">
        <div class="consent-panel">

            <LayoutContainer class="consent-panel__container">
                <div class="consent-panel__text-wrapper">
                    <UIHeading :level="4" :tag="'div'" class="pb-3">{{ translations.consentPanelTitle }}</UIHeading>
                    <UIParagraph class="pb-6 xl:pb-3">{{ translations.consentPanelDescription }}</UIParagraph>
                </div>
                <div class="consent-panel__actions">
                    <UIButton @click="allowCookies">{{ translations.consentPanelButtonAccept }}</UIButton>
                    <UIButton @click="reject">{{ translations.consentPanelButtonReject }}</UIButton>
                </div>
            </LayoutContainer>

        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
const { initialize } = useGtag()
const panelVisible = ref(true)

const allowCookies = () => {
    initialize()
    closePanel()
}

const reject = () => {
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
    if (document.cookie.split(";").some((item) => item.trim().startsWith("_ga="))) {
        initialize()
        panelVisible.value = false
    }
})

</script>

<style scoped lang="scss">
.consent-panel {
    @apply fixed w-full bottom-0 xl:bottom-5 xl:left-[50%] xl:translate-x-[-50%];

    &__container {
        @apply flex flex-col xl:flex-row py-6 bg-slate-200 shadow-2xl shadow-primary-400 md:rounded-xl xl:p-8;
    }

    &__text-wrapper {
        @apply xl:w-7/12;
    }

    &__actions {
        @apply flex flex-col gap-3 xl:w-5/12 xl:flex xl:justify-end xl:items-center xl:gap-4 xl:flex-row;
    }
}
</style>
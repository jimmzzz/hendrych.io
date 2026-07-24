<template>
  <form v-if="!isSubmitted" @submit.prevent="submitForm" id="form" class="contact-form needs-validation">
    <div class="mb-5">
      <label for="name" class="sr-only">{{ translations.contactFormPlaceholderName }}</label>
      <input ref="inputNameRef" id="name" type="text" :placeholder="translations.contactFormPlaceholderName"
        v-model="name" @input="validateName" class="contact-form__input" name="name" />

      <div v-if="nameError === ERROR_EMPTY" class="contact-form__input--invalid">
        {{ translations.contactFormErrorName }}
      </div>
    </div>

    <div class="mb-5">
      <label for="email" class="sr-only">{{ translations.contactFormPlaceholderEmail }}</label>
      <input ref="inputEmailRef" id="email" type="email" :placeholder="translations.contactFormPlaceholderEmail"
        v-model="email" @input="validateEmail" class="contact-form__input" name="email" />

      <div v-if="emailError === ERROR_EMPTY || emailError === ERROR_INVALID" class="contact-form__input--invalid">
        {{ emailError === ERROR_EMPTY
          ? translations.contactFormErrorEmail : translations.contactFormErrorInvalidEmail
        }}
      </div>
    </div>

    <div class="mb-3">
      <textarea ref="inputMessageRef" name="message" v-model="message" @input="validateMessage"
        :placeholder="translations.contactFormPlaceholderMessage" class="contact-form__text-area"></textarea>

      <div v-if="messageError === ERROR_EMPTY" class="contact-form__input--invalid">
        {{ translations.contactFormErrorMessage }}
      </div>
    </div>

    <UIButton type="submit" :disabled="isSubmitting" class="block w-full">
      {{ isSubmitting ? translations.contactFormSubmitting : translations.contactFormSubmitButton }}
    </UIButton>

    <div v-if="errorMessage" class="contact-form__error">
      {{ errorMessage }}
    </div>
  </form>

  <div v-else class="contact-success" role="status" aria-live="polite">
    <div class="contact-success__icon-wrap">
      <div class="contact-success__icon-ring" aria-hidden="true"></div>
      <Icon name="uil:check" class="contact-success__icon" />
    </div>
    <h3 class="contact-success__title">{{ translations.contactFormSuccessTitle }}</h3>
    <p class="contact-success__description">{{ translations.contactFormSubmitSuccess }}</p>
    <button type="button" class="contact-success__button" @click="resetToForm">
      {{ translations.contactFormSendAnother }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type ErrorType = typeof ERROR_EMPTY | typeof ERROR_INVALID | null;

const WEB3FORMS_ACCESS_KEY = "671adc3e-fdfc-4e3b-b4e0-d3ec3e4ef630";
const ERROR_EMPTY = 'empty' as const;
const ERROR_INVALID = 'invalid' as const;

const name = ref('')
const email = ref('')
const message = ref('')

const nameError = ref<ErrorType>(null)
const emailError = ref<ErrorType>(null)
const messageError = ref<ErrorType>(null)
const isSubmitted = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')

const inputNameRef = ref<HTMLInputElement | null>(null)
const inputEmailRef = ref<HTMLInputElement | null>(null)
const inputMessageRef = ref<HTMLInputElement | null>(null)

const validateName = () => {
  nameError.value = !name.value ? ERROR_EMPTY : null;
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailError.value = ERROR_EMPTY;
  } else if (!emailPattern.test(email.value)) {
    emailError.value = ERROR_INVALID;
  } else {
    emailError.value = null;
  }
};

const validateMessage = () => {
  messageError.value = !message.value ? ERROR_EMPTY : null;
};

const formValid = computed(() => {
  return !nameError.value && !emailError.value && !messageError.value && name.value && email.value && message.value;
});

const clearForm = () => {
  name.value = ''
  email.value = ''
  message.value = ''
}

const resetToForm = () => {
  isSubmitted.value = false
  isSubmitting.value = false
  errorMessage.value = ''
  nameError.value = null
  emailError.value = null
  messageError.value = null
}

const submitForm = async () => {
  errorMessage.value = ''
  isSubmitting.value = true

  if (!formValid.value) {
    if (!name.value) {
      nameError.value = ERROR_EMPTY
      inputNameRef.value?.focus()
      return
    }

    if (!email.value) {
      emailError.value = ERROR_EMPTY
      inputEmailRef.value?.focus()
      return
    }

    if (!message.value) {
      messageError.value = ERROR_EMPTY
      inputMessageRef.value?.focus()
      return
    }
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      isSubmitted.value = true
      clearForm()
      return
    }

    errorMessage.value = translations.value.contactFormSubmitError
  } catch (error) {
    console.error(error);
    errorMessage.value = translations.value.contactFormSubmitError
  } finally {
    isSubmitting.value = false
  }
}

const translations = computed(() => {
  return {
    contactFormPlaceholderName: 'Full name',
    contactFormErrorName: 'Please provide your full name.',
    contactFormPlaceholderEmail: 'Email Address',
    contactFormErrorEmail: 'Please provide your email address.',
    contactFormErrorInvalidEmail: 'Please provide a valid email address.',
    contactFormPlaceholderMessage: 'Your Message',
    contactFormErrorMessage: 'Please enter your message.',
    contactFormSubmitting: 'Sending...',
    contactFormSubmitButton: 'Send Message',
    contactFormSuccessTitle: 'Message sent',
    contactFormSendAnother: 'Send another message',
    contactFormSubmitSuccess: 'Email sent successfully! Thank you for your message. I will contact you soon.',
    contactFormSubmitError: 'Unable to send your message. Please try again later.',
  }
})
</script>

<style lang="scss">
.contact-form {
  &__input {
    @apply w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none ring-teal-100 transition focus:border-teal-500 focus:ring-4;

    &--invalid {
      @apply mt-1 text-sm text-red-500;
    }
  }

  &__text-area {
    @apply h-36 w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none ring-teal-100 transition focus:border-teal-500 focus:ring-4;
  }

  &__error {
    @apply mt-4 text-lg leading-6 text-red-500;
  }
}

.contact-success {
  @apply flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/70 px-6 py-10 text-center;

  &__icon-wrap {
    @apply relative mb-6 flex h-20 w-20 items-center justify-center;
  }

  &__icon-ring {
    @apply absolute inset-0 rounded-full border-4 border-emerald-200;
    animation: ping-ring 1.8s ease-out infinite;
  }

  &__icon {
    @apply h-10 w-10 rounded-full bg-emerald-600 p-2 text-white;
    animation: pop-in 360ms cubic-bezier(.17, .84, .44, 1.2) both;
  }

  &__title {
    @apply mb-2 text-2xl font-semibold text-emerald-900;
  }

  &__description {
    @apply max-w-md text-emerald-800;
  }

  &__button {
    @apply mt-6 rounded-xl border border-emerald-700 px-4 py-2 font-medium text-emerald-900 transition hover:bg-emerald-100;
  }
}

@keyframes pop-in {
  0% {
    transform: scale(0.45);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes ping-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.85;
  }

  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
</style>

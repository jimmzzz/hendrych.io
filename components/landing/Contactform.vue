<template>
  <form @submit.prevent="submitForm" id="form" class="contact-form needs-validation">
    <div class="mb-5">
      <label for="name" class="sr-only">{{ translations.contactFormPlaceholderName }}</label>
      <input ref="inputNameRef" id="name" type="text" :placeholder="translations.contactFormPlaceholderName"
        v-model="name" @input="validateName" class="contact-form__input" name="name" />

      <div v-if="nameError === ERROR_EMPTY" class="contact-form__input--invalid">
        {{ translations.contactFormErrorName }}
      </div>
    </div>

    <!-- email -->
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

    <!-- message -->
    <div class="mb-3">
      <textarea ref="inputMessageRef" name="message" v-model="message" @input="validateMessage"
        :placeholder="translations.contactFormPlaceholderMessage" class="contact-form__text-area"></textarea>

      <div v-if="messageError === ERROR_EMPTY" class="contact-form__input--invalid">
        {{ translations.contactFormErrorMessage }}
      </div>
    </div>

    <UIButton type="submit" class="block w-full">
      {{ translations.contactFormSubmitButton }}
    </UIButton>

    <div v-if="successMessage" class="contact-form__success">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="contact-form__error">
      {{ successMessage }}
    </div>
  </form>

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
const successMessage = ref('')
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

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''

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
      console.log(result);
      successMessage.value = translations.value.contactFormSubmitSuccess
    }
  } catch (error) {
    console.error(error);
    errorMessage.value = translations.value.contactFormSubmitError
  } finally {
    clearForm()
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
    contactFormSubmitButton: 'Send Message',
    contactFormSubmitSuccess: 'Email sent successfully! Thank you for your message. I will contact you soon.',
    contactFormSubmitError: 'Unable to send your message. Please try again later.',
  }
})
</script>

<style lang="scss">
.contact-form {
  &__input {
    @apply w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100;

    &--invalid {
      @apply text-red-400 text-sm mt-1;
    }
  }

  &__text-area {
    @apply w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100;
  }

  &__success {
    @apply text-green-600 mt-4 text-lg leading-6;
  }

  &__error {
    @apply text-red-400 mt-4 text-lg leading-6;
  }
}
</style>

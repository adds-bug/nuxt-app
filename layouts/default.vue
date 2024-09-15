<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat label="home" no-caps @click="navigate()" />
          <!-- :label="$t('home')" -->
        </NuxtLink>
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/login">
          <q-btn stretch flat no-caps label="login" @click="navigate()" />
          <!-- :label="$t('login')" -->
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="selectedLang">
          <q-list padding dense>
            <q-item v-close-popup clickable @click="locale = 'en'">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable @click="locale = 'ko'">
              <q-item-section>
                <q-item-label>한국어</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const { locale } = useI18n();

interface Language {
  name: string;
  code: 'en' | 'ko';
}

const languages = ref<Language[]>([
  { name: 'English', code: 'en' },
  { name: '한국어', code: 'ko' },
]);

const selectedLang = computed(
  () => languages.value.find((lang) => lang.code === locale.value)?.name,
);

// save language info on cookie
watch(locale, (val) => (useCookie('locale').value = val));
// watch(locale, (val) => useSessionStorage('locale', val));
</script>

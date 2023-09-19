<template>
  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<script setup lang="ts">

import {useChangeThemeStore} from "~/shared/components/Header/header-store";
import {storeToRefs} from "pinia";
import {useColorMode} from "#imports";

const changeThemeStore = useChangeThemeStore()
const {theme} = storeToRefs(changeThemeStore);
const {currentTheme} = changeThemeStore

onMounted(() => {
  currentTheme(colorMode.value)
})

const colorMode = useColorMode()

useHead({
  htmlAttrs: {
    'data-theme': theme
  },
})
</script>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  @apply min-h-screen font-sans;
}
</style>
<script setup lang="ts">
import {Icon} from '@iconify/vue'

interface Props {
  iconName:   string;
  iconWith:   string;
  iconHeight: string;
}

defineProps<Props>()
</script>

<template>
    <Icon :icon="iconName" :width="iconWith" :height="iconHeight"/>
</template>

<style scoped lang="css">
.animate-tada {
  animation: tada 1.5s ease-in-out infinite;
}
</style>
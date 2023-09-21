<script setup lang="ts">

interface Props {
  title: string
  color?: string
  subTitle?: string,
  backgroundUrl: string
}

const props = defineProps<Props>()
const colorTest = props.color || 'text-slate-900'

</script>

<template>
  <div
      class="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
      :style="{
            backgroundImage:
              'url('+ backgroundUrl +')',
          }"
  >
    <div class="max-w-[180px]">
      <div :class="`text-xl font-medium ${colorTest} mb-2`">
        {{ title }}
      </div>
      <p :class="`text-base ${colorTest}`">{{ subTitle }}</p>
    </div>
    <div
        class="absolute top-1/2 -translate-y-1/2 right-5 mt-2 h-12 w-12 bg-white text-slate-900 rounded-full text-xs font-medium flex flex-col items-center justify-center"
    >
      Ver
    </div>
  </div>
</template>

<style scoped lang="css">

</style>
<script setup lang="ts">
  interface Props {
    with?:     string
    srcImage?:  string
    textName?: string
    typeImage: boolean
  }
  const props = defineProps<Props>()
  const withAvatar = props.with || '12';
  const textNameUser = props.textName || 'MG';
</script>

<template>
  <label class="btn btn-ghost btn-circle avatar" v-if="props.typeImage">
    <div :class="`w-${withAvatar} rounded-full`">
      <img :src="srcImage"  :alt="textNameUser"/>
    </div>
  </label>
  <div class="avatar placeholder cursor-pointer" v-else>
    <div :class="`bg-neutral-focus text-neutral-content rounded-full w-${withAvatar}`">
      <span>{{ textNameUser }}</span>
    </div>
  </div>
</template>

<style scoped lang="css">

</style>
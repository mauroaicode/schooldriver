<script setup lang="ts">
</script>

<template>
  <div class="bg-base-100 h-screen flex">
    <!-- Sidebar -->
    <div class="w-80 h-screen bg-neutral">
      <!-- Logo -->
      <Logo/>
      <!-- Sidebar Menu -->
      <ul class="menu p-4 space-y-2">
        <slot name="menu"></slot>
      </ul>
    </div>
    <!-- Slot Content -->
    <div class="flex-1 p-4 overflow-scroll">
      <slot name="content"></slot>
    </div>
  </div>

</template>

<style scoped lang="css">

</style>
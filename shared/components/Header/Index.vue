<script setup lang="ts">
import Profile from "~/shared/components/Header/Navtools/Profile.vue";
import Notification from "~/shared/components/Header/Navtools/Notification.vue";
import SwitchDarkLight from "~/shared/components/Header/Navtools/SwitchDarkLight.vue";

</script>

<template>
  <div class="sticky top-2 z-30 flex h-16 w-full rounded justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content false">
    <div class="navbar bg-neutral shadow-emerald-800 space-x-5">
      <div class="flex-1 items-center">

      </div>
      <SwitchDarkLight/>
      <Notification/>
      <Profile/>
    </div>
  </div>

</template>

<style scoped lang="css">

</style>
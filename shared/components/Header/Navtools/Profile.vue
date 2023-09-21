<script setup lang="ts">
import Avatar from "~/shared/components/Avatar/Index.vue"

</script>

<template>
  <div class="dropdown dropdown-end">
    <div class="flex items-center space-x-3" tabindex="0">
    <!--  Avatar -->
      <Avatar
          :typeImage="true"
          srcImage="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
      />
      <!--  Text User -->
      <div class="space-x-2 flex-none cursor-pointer text-sm font-normal items-center lg:flex hidden text-ellipsis whitespace-nowrap">
        <span class="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">Albert Flores</span>
        <span class="text-base inline-block ltr:ml-[5px] rtl:mr-[5px]">
          <!--  Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
        </span>
      </div>
    </div>
    <ul tabindex="0" class="menu bg-neutral menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between active:bg-gray-900 active:text-slate-100">
          Profile
          <span class="badge bg-error rounded-2xl text-white border-none">New</span>
        </a>
      </li>
      <li><a class="active:bg-gray-900 active:text-slate-100">Settings</a></li>
      <li><a class="active:bg-gray-900 active:text-slate-100">Logout</a></li>
    </ul>
  </div>
</template>

<style scoped lang="css">

</style>
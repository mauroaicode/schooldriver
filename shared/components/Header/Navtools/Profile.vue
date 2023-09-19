<script setup lang="ts">
import Icon from "~/shared/components/Icon";
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
      <div class="space-x-3 flex-none cursor-pointer text-sm font-normal items-center lg:flex hidden text-ellipsis whitespace-nowrap">
        <span class="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">Albert Flores</span>
        <span class="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
          <!--  Icon -->
          <Icon iconName="fluent:chevron-down-28-filled" iconWith="15" iconHeight="15"/>
        </span>
      </div>
    </div>
    <ul tabindex="0" class="menu bg-neutral menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between">
          Profile
          <span class="badge bg-error rounded-2xl text-white border-none">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>

<style scoped lang="css">

</style>
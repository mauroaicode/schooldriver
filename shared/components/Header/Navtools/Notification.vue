<script setup lang="ts">
import Icon from "~/shared/components/Icon";
</script>

<template>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <Icon iconName="heroicons-outline:bell" iconWith="22" iconHeight="22"/>
          <span class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-error border-none border-white rounded-full -top-2 -right-2">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 bg-neutral z-[1] card card-compact dropdown-content w-96 shadow">
        <div class="card-body">
          <div class="flex justify-items-center justify-between">
            <span class="font-bold text-lg">Notificaciones</span>
            <a class="link link-accent">Ver todas</a>
          </div>

          <div class="divider m-0"></div>
          <div>
            <h4 class="font-semibold text-base">Tienes un nuevo mensaje</h4>
            <p class="truncate text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aut eaque eligendi est, eveniet nisi pariatur, quibusdam, rem rerum saepe voluptatem. Assumenda dolor eligendi iure laborum quidem reprehenderit voluptates.</p>
            <p class="text-gray-400 mt-1 text-xs">Hace 3 minutos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">

</style>
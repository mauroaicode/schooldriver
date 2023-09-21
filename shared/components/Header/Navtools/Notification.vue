<script setup lang="ts">
</script>

<template>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"/></svg>
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
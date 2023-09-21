<script setup lang="ts">
import {ref} from 'vue';
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>

  <h2 class="menu-title mb-3 font-semibold ">NAVEGACIÓN</h2>
  <li>
    <a class="bg-slate-950 dark:bg-green-400 text-white dark:text-black">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2V5Zm12-2h6a2 2 0 0 1 2 2v5h-8V3Zm0 11h8v5a2 2 0 0 1-2 2h-6v-7Z"/></svg>
      Dashboard
    </a>
  </li>

  <li class="right-0.5">
    <a class="active:bg-gray-900 active:text-slate-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12Z"/></svg>
      <span class="ml-0">Escuelas</span>
    </a>
  </li>
  <li>
    <div class="relative active:bg-gray-900 active:text-slate-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 26 26"><path fill="currentColor" d="M4 0v19c0 .555-.445 1-1 1c-.555 0-1-.445-1-1V7h1V5H0v14c0 1.645 1.355 3 3 3h10c-.2-.6-.313-1.3-.313-2H5.814c.114-.316.187-.647.187-1V2h16v11c.7.2 1.4.5 2 1V0H4zm4 4v4h12V4H8zm0 6v2h5v-2H8zm7 0v2h5v-2h-5zm-7 3v2h5v-2H8zm12 1c-3.324 0-6 2.676-6 6s2.676 6 6 6v-2c-2.276 0-4-1.724-4-4s1.724-4 4-4s4 1.724 4 4c0 .868-.247 1.67-.688 2.313L22 21l-.5 4.5L26 25l-1.25-1.25C25.581 22.706 26 21.377 26 20c0-3.324-2.676-6-6-6zM8 16v2h5v-2H8z"/></svg>
      <button
          type="button"
          class="flex items-center justify-between w-full px-0.5 text-base transition duration-75 rounded-lg group active:bg-gray-900 active:text-slate-100"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
          @click="toggleDropdown"
      >
        Planes

        <!-- Icono de flecha hacia abajo (opcional) -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transform transition-transform active:bg-gray-900 active:text-slate-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            :class="{ 'rotate-180': isDropdownOpen }"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
          />
        </svg>

      </button>
        <!-- Contenido del menú desplegable -->
        <ul :class="{ 'hidden': !isDropdownOpen }" class="space-y-2 absolute top-full w-11/12 transition duration-100 ease-in-out">
          <!-- Opciones del menú -->
          <li class="mt-3">
            <a class="active:bg-gray-900 active:text-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v6m0-6H9m12 6v4a2 2 0 0 1-2 2H9m12-6H9m-6 0v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m6-12v12"/></svg>
              Ver Planes
            </a>
          </li>
          <li>
            <a class="active:bg-gray-900 active:text-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5V20Z"/></g></svg>
              Agregar Plan
            </a>
          </li>
        </ul>
    </div>

  </li>
</template>

<style scoped lang="css">
.rotate-180 {
  transform: rotate(180deg);
}
</style>
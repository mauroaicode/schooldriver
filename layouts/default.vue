<script setup lang="ts">

import Header from "~/shared/components/Header/Index.vue";
import Sidebar from "~/shared/components/Sidebar/Index.vue";

</script>

<template>
  <!--=====================================
          CONTENIDO PRINCIPAL
  ======================================-->
  <!--  Sidebar-->
  <Sidebar>
    <!--  Menu-->
    <template v-slot:menu>
      <!--  Menu Admin-->
      <MenuAdmin/>
    </template>
    <template v-slot:content>
      <!--  Header-->
      <Header/>
      <!--  Contenido-->
      <Transition name="overlay-fade">
      <div class="bg-base-100 drawer lg:drawer-open">
        <div class="drawer-content flex flex-col">
          <NuxtPage class="duration-150 prose prose-sm md:prose-base w-full max-w-4xl flex-grow pt-10"/>
        </div>
      </div>
      </Transition>
    </template>
  </Sidebar>
</template>

<style scoped lang="css">

</style>
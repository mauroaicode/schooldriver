<script setup lang="ts">
import bgImage from "~//assets/images/resources/widget-bg-3-1.png"
import CardBackground from "~/shared/components/Cards/CardBackground.vue";
</script>
<template>
  <div>
    <h1 class="text-1xl font-semibold">Dashboard</h1>
    <div class="grid grid-cols-12 gap-5 mb-5">
      <div class="2xl:col-span-5 lg:col-span-5 col-span-12">
        <div class="2xl:col-span-4 lg:col-span-5 col-span-12">
          <CardBackground
              :background-url="bgImage"
              title="Bienvenido"
              subTitle="Inicia ahora adquiriendo una suscripción."
          />
        </div>
      </div>
    </div>
  </div>
</template>


<template>
  <div class="flex">
    <SidebarLayout class="fixed top-0 left-0 h-full flex w-64" />
    <div class="ml-64 flex flex-col flex-grow">
      <HeaderLayout class="fixed top-0 left-64" />
      <div class="h-full">
        <RouterView class="mt-16" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarLayout from '@/components/layouts/SidebarLayout.vue'
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
</script>

<style scoped></style>

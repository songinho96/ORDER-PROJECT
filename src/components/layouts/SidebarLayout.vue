<template>
  <section class="bg-black h-100vh flex-col">
    <div class="h-[100px] w-full bg-blue-400 flex justify-around items-center">
      <div class="bg-black w-[40px]">|||</div>
      <div>Title</div>
    </div>
    <div class="flex flex-col gap-7 items-center py-10">
      <div v-for="item in menuItems" :key="item.key">
        <button
          type="button"
          class="w-[150px] px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  { key: '안주', name: '안주' },
  { key: '주류', name: '주류' },
  { key: '음료', name: '음료' },
  { key: '추가 메뉴', name: '추가 메뉴' }
])
</script>

<style></style>

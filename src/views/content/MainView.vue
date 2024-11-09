<template>
  <div class="bg-green-300">
    <div
      class="py-10 h-full w-full grid grid-cols-1 gap-5 2xl:grid-cols-4 min-[1700px]:grid-cols-5 min-[2000px]:grid-cols-7 xl:grid-cols-3 md:grid-cols-2"
    >
      <div v-for="item in images" :key="item.name">
        <div
          class="m-[40px] w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="h-[250px] w-[300px] p-8 rounded-t-lg"
              alt="product image"
              :src="item.imageUrl"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ item.name }}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
                >5.0</span
              >
            </div>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ item.price }}</span>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add to cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import squidImage from '@/assets/images/오징어볶음.jpeg'
import porkImage from '@/assets/images/제육볶음.jpeg'
import octopusImage from '@/assets/images/낙지볶음.jpeg'
import beefImage from '@/assets/images/차돌숙주볶음.jpeg'
import { getCategoryApi } from '@/axios/category/categoryApi'

const images = ref([
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '제육 볶음',
    imageUrl: porkImage,
    price: '15,000 원'
  },
  {
    name: '낙지 볶음',
    imageUrl: octopusImage,
    price: '17,000 원'
  },
  {
    name: '차돌숙주볶음',
    imageUrl: beefImage,
    price: '22,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  },
  {
    name: '오징어 볶음',
    imageUrl: squidImage,
    price: '13,000 원'
  }
])


// getCategory 함수
const getCategory = async () => {
  try {
    const response = await getCategoryApi()
    console.log(getCategoryApi);
    // 필요한 형태로 response.data를 images 배열에 추가하거나 업데이트합니다.
    const fetchedData = response.data.map((item: any) => ({
      name: item.name,
      imageUrl: item.imageUrl,
      price: `${item.price} 원`
    }))
    images.value = [...images.value, ...fetchedData]
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}

// 컴포넌트가 마운트될 때 getCategory 함수 호출
onMounted(() => {
  getCategory()
})
</script>

<style></style>

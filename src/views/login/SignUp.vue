<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <span class="text-3xl mr-2">👨‍🍳</span>
        ORDER
      </router-link>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            계정 생성하기
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
            <!-- 이름 입력 -->
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
              <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="이름을 입력하세요" required>
            </div>
            <!-- 생년월일 입력 -->
            <div>
              <label for="birthdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
              <input type="date" name="birthdate" id="birthdate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                v-model="password"
                placeholder="••••••••" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$" 
                title="비밀번호는 8~20자리로, 특수문자를 포함해야 합니다"
                required>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호 확인</label>
              <input 
                type="password" 
                name="confirm-password" 
                id="confirm-password" 
                v-model="confirmPassword"
                placeholder="••••••••" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$" 
                title="비밀번호는 8~20자리로, 특수문자를 포함해야 합니다"
                required>
              <!-- 비밀번호 일치 확인 경고 메시지 -->
              <p v-if="password !== confirmPassword && confirmPassword" class="text-sm text-red-500">비밀번호가 일치하지 않습니다.</p>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">저는 <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">이용 약관</a>에 동의합니다.</label>
              </div>
            </div>
            <button 
              type="submit" 
              :disabled="password !== confirmPassword" 
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-400">계정 생성하기</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              이미 계정이 있으신가요? <button @click="goToLogin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">로그인 하기</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const password = ref('')
const confirmPassword = ref('')

// 폼 제출 핸들러
function handleSubmit() {
  if (password.value === confirmPassword.value) {
    alert('계정이 성공적으로 생성되었습니다.')
    // 폼 제출 로직 작성
  } else {
    alert('비밀번호가 일치하지 않습니다.')
  }
}

function goToLogin() {
  router.push('/login')
}
</script>

<style scoped></style>

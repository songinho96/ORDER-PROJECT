import axios from "axios";

const instance = axios.create({
  baseURL: '/api', // Vite 프록시를 통해 백엔드 서버로 요청을 보냄
  timeout: 1000,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Content-Type': 'application/json' // JSON 형식으로 보낼 것을 명시
  }
});

export async function createShopSignApi(
  id: string,
  password: string,
  name: string,
  birthDate: string,
  email: string
): Promise<any> {
  try {
    // request body에 데이터 포함
    const response = await instance.post('/member/shop/sign', {
      id,
      password,
      name,
      birthDate,
      email
    });
    return response.data;
  } catch (error) {
    console.error('Error in admin sign-up:', error);
    return null;
  }
}

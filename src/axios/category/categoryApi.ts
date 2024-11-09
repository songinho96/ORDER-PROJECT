import axios from "axios";

const instance = axios.create({
  baseURL: '/api', // Vite 프록시를 통해 백엔드 서버에 요청
  timeout: 1000,
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
});

export async function getCategoryApi(): Promise<any> {
  try {
    return await instance.get('/table-order/category');
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

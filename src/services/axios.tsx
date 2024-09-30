import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://example.com/api', // 기본 API URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 요청 제한 시간 (10초)
});

// 요청 인터셉터
api.interceptors.request.use(
  config => {
    // 필요한 경우 여기서 토큰을 추가
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  response => {
    // 성공적으로 응답이 도착했을 때의 처리
    return response;
  },
  error => {
    // 에러 처리 로직
    if (error.response && error.response.status === 401) {
      // 401 에러 처리 (예: 인증 만료 시 로그아웃)
      console.log('Unauthorized - Redirect to login');
    }
    return Promise.reject(error);
  },
);

export default api;

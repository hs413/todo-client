// src/env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string; // API URL
  readonly VITE_APP_TITLE: string; // API URL
  // 추가 환경 변수가 있다면 여기에 정의
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { defineConfig, externalizeDepsPlugin } from 'electron-vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    // Vite 기본 설정을 적용하여 CSS 및 기타 파일을 처리하도록 함
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],  // 필요한 파일 확장자 추가
    },
    css: {
      devSourcemap: true,  // 개발 중 CSS 소스맵 사용
    },
  }
})

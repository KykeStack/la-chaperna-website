/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: T
      VUE_APP_NAME: string
    }
  }
}

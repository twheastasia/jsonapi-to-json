/*
 * @Descripttion: 
 * @version: 
 * @Author: weihai.tang
 * @Date: 2021-05-12 14:14:12
 * @LastEditTime: 2021-05-12 15:13:12
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 开发服务器端口
const port: number =  3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port,
    open: true
  },
  base: './',
  publicDir: 'public'
})

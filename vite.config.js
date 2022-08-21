import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const url = 'http://101.200.57.103/';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // 全局样式
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element/index.scss" as *;`,
            },
        }
    },

    // 反向代理
    server: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        disableHostCheck: true,
        port: 3000,
        origin: 'http://101.200.57.103/',
        proxy: {
            '/apis': {
                target: url,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': '/apis'
                }
            }
        }
    }

})

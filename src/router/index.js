import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 路由按模块分类
import common from './common'


export const menus = [
    
]

// createRouter 创建路由实例
const router = createRouter({
    /**
     * hash模式：createWebHashHistory，
     * history模式：createWebHistory
     */
    history: createWebHistory(),
    routes: [
        ...common,
        ...menus
    ]
})
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })

let flag = true // 刷新标识
router.beforeEach(async(to, from, next) => {
    // 启动进度条
    NProgress.start()

    // 是否登陆
    // if (!sessionStorage.getItem('token') && to.path !== "/login") {
    //     return next({ path: "/login" });
    // };

    // if (sessionStorage.getItem('token') && flag) {
    //     const menuStore = useMenuStore();
    //     await menuList({ types: '1,2,3', status: 1 }).then((res) => {
    //         result.push({ path: '/:pathMatch(.*)*', redirect: '/404' })
    //         result.forEach((item) => {
    //             router.addRoute(item)
    //         })
    //         menuStore.setMenu([...result])
    //         flag = false
    //         next({...to, replace: true })
    //     })
    // } else {
    //     next()
    // }
    next()
})

router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
})



// 格式化路由
let modules =
    import.meta.glob('../views/**/**/*.vue')
export default router
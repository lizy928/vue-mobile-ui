import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Login from "../views/login/login.vue";
import RetrievePwd from '../views/login/retrievePwd.vue'
import Register from '../views/login/register.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: {
            title: "首页",
            isMenu: false,
        },
    },
    {
        path: "/register",
        name: "Login",
        component: Register,
        meta: {
            title: "注册",
            isMenu: false,
        },
    },
    {
        path: "/retrievePwd",
        name: "retrievePwd",
        component: RetrievePwd,
        meta: {
            title: "找回密码",
            isMenu: false,
        },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            title: "首页",
            isMenu: true,
        },
    },
    {
        path: "/me",
        name: "Me",
        component: () => import("../views/me.vue"),
        meta: {
            title: "我的",
            isMenu: true,
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

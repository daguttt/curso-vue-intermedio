import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home"
import Posts from "@/views/Posts"
import Post from "@/components/Post"
// import NotFound from "@/views/NotFound"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/posts",
        name: "posts",
        component: Posts
    },
    {
        path: "/posts/:post",
        name: "post",
        component: Post
    },
    {
        path: "*",
        redirect: "/",
        // component: NotFound,
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
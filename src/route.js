import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'

const routes=[
    {
        name:'HomePage',
        path:'/home',
        component:HomePage
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Add',
        path:'/add',
        component:Add
    },
    {
        name:'Update',
        path:'/update/:id',
        component:Update
    }
]
    const router=createRouter({
        history:createWebHistory(),
        routes
    })
    export default router

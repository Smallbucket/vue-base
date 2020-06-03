import Vue from 'vue'
import Router from 'vue-router'
import { userRouters, basicRouters } from './routers'
import { routerMode } from '@/config/env'

Vue.use(Router)

const router = new Router({
	routes: basicRouters,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

export default router
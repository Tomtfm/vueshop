import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Rule from './components/rule/Rule.vue'

Vue.use(Router)

const router = new Router({
  routes: [
		{ path: '/', redirect: '/home' },
		{ 
			path: '/home',
			component: Home,
			redirect: '/welcome',
			children: [
				{ path: '/welcome', component: Welcome },
				{ path: '/rule', component: Rule }
			]
		}
  ]
})

export default router

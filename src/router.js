import Vue from 'vue'
import Router from 'vue-router'
import AllUsers from './components/AllUsers.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AllUsers
        },
        {
            path: '/selected',
            component: () => import('./components/SelectedUsers.vue')
        }
    ]
})
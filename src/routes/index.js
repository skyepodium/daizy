import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/views/Main.vue'
import Chat from '@/views/Chat.vue'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        },
        {
            path: '/chat',
            component: Chat,
            name: 'Chat'
        }
    ]
})
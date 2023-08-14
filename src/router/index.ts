import { createRouter, createWebHashHistory } from 'vue-router'
import demo from '@/views/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'demo',
    component: demo,
    // children: [
    //   {
    //     path: '/demo-accordion',
    //     name: 'demo-accordion',
    //     component: () => import('@/views/demo/DemoAccordion.vue')
    //   },
    //   {
    //     path: '/demo-breadcrumb',
    //     name: 'demo-breadcrumb',
    //     component: () => import('@/views/demo/DemoBreadcrumb.vue')
    //   },
    //   {
    //     path: '/demo-button',
    //     name: 'demo-button',
    //     component: () => import('@/views/demo/DemoButton.vue')
    //   },
    //   {
    //     path: '/demo-card',
    //     name: 'demo-card',
    //     component: () => import('@/views/demo/DemoCard.vue')
    //   },
    //   {
    //     path: '/demo-checkbox',
    //     name: 'demo-checkbox',
    //     component: () => import('@/views/demo/DemoCheckbox.vue')
    //   },
    //   {
    //     path: '/demo-dropdown',
    //     name: 'demo-dropdown',
    //     component: () => import('@/views/demo/DemoDropdown.vue')
    //   },
    //   {
    //     path: '/demo-tabs',
    //     name: 'demo-tabs',
    //     component: () => import('@/views/demo/DemoTabs.vue')
    //   }
    // ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
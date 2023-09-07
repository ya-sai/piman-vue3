import { createRouter, createWebHashHistory } from 'vue-router'
import demo from '@/views/DemoHome.vue'

const routes = [
  {
    path: '/',
    name: 'demo',
    component: demo,
    children: [
      {
        path: '/accordion',
        name: 'demo-accordion',
        component: () => import('@/views/demo/DemoAccordion.vue')
      },
      {
        path: '/breadcrumb',
        name: 'demo-breadcrumb',
        component: () => import('@/views/demo/DemoBreadcrumb.vue')
      },
      {
        path: '/button',
        name: 'demo-button',
        component: () => import('@/views/demo/DemoButton.vue')
      },
      {
        path: '/card',
        name: 'demo-card',
        component: () => import('@/views/demo/DemoCard.vue')
      },
      {
        path: '/checkbox',
        name: 'demo-checkbox',
        component: () => import('@/views/demo/DemoCheckbox.vue')
      },
    //   {
    //     path: '/demo-dropdown',
    //     name: 'demo-dropdown',
    //     component: () => import('@/views/demo/DemoDropdown.vue')
    //   },
      {
        path: '/switch',
        name: 'demo-switch',
        component: () => import('@/views/demo/DemoSwitch.vue')
      },
      {
        path: '/tabs',
        name: 'demo-tabs',
        component: () => import('@/views/demo/DemoTabs.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import IconView from '../views/IconView.vue'
import ButtonView from '../views/ButtonView.vue'
import CardView from '../views/CardView.vue'
import CollapseView from '../views/CollapseView.vue'
import DialogView from '../views/DialogView.vue'
import DropdownView from '../views/DropdownView.vue'
import PagerView from '../views/PagerView.vue'
import TooltipView from '../views/TooltipView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'icon',
      component: IconView
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonView
    },
    {
      path: '/card',
      name: 'card',
      component: CardView
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: CollapseView
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: DialogView
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropdownView
    },
    {
      path: '/pager',
      name: 'pager',
      component: PagerView
    },
     {
      path: '/tooltip',
      name: 'tooltip',
      component: TooltipView
    }
  ],
  linkActiveClass: 'active',
})

export default router

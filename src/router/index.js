import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../stores/auth';
import { useCookies } from '@vueuse/integrations/useCookies'

import Home from '../views/Home.vue'
import { http } from '../hooks/useApi';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Объявления',
      meta: { showNav: true, auth: false },
      component: Home
    },
    {
      path: '/show/:id',
      name: '',
      meta: { showNav: false, auth: false },
      component: () => import('../views/ShowCatalog.vue')
    },
    {
      path: '/login',
      name: 'Регистрация',
      meta: { showNav: false, auth: false },
      component: () => import('../views/auth/login.vue')
    },
    {
      path: '/add-ads',
      name: 'Подать объявление',
      meta: { showNav: false, auth: true },
      component: () => import('../views/profile/AddAds.vue')
    },
    {
      path: '/favourite',
      name: 'Избранное',
      meta: { showNav: true, auth: true },
      component: () => import('../views/profile/Favourite.vue')
    },
    {
      path: '/profile',
      name: 'Профиль',
      meta: { showNav: true, auth: true },
      component: () => import('../views/profile/Profile.vue')
    },
  ]
})

router.beforeEach(async (to) => {


  const auth = useAuth();
  const cookie = useCookies(['token'])


  if(!auth.check && await cookie.get('token')){
      await http.get('auth/user').then((res)=> {
          auth.setUser(res.data)
      }).catch((err)=>{
        cookie.remove('token');
      })
  }
  if (to.meta.auth && (!auth.check || auth.notCompleted)) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});
export default router

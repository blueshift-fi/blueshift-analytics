import { RouteRecordRaw } from 'vue-router';
import { RouterNames } from '@/router/router.names';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNames.MAIN_PAGE,
    component: () => import('@/views/PageMain/PageMain.vue')
  },
  {
    path: '/portfolios',
    name: RouterNames.PORTFOLIO_LIST_PAGE,
    component: () => import('@/views/PagePortfolioList/PagePortfolioList.vue')
  },
  {
    path: '/portfolios/:id',
    name: RouterNames.PORTFOLIO_PAGE,
    component: () => import('@/views/PagePortfolio/PagePortfolio.vue')
  },
  {
    path: '/tokens',
    name: RouterNames.TOKEN_LIST_PAGE,
    component: () => import('@/views/PageTokenList/PageTokenList.vue')
  },
  {
    path: '/tokens/:id',
    name: RouterNames.TOKEN_PAGE,
    component: () => import('@/views/PageTokenList/PageTokenList.vue')
  },
  {
    path: '/ui',
    component: () => import('@/views/UiElements/UiElements.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: RouterNames.NOT_FOUND_PAGE,
    component: () => import('@/views/PageNotFound/PageNotFound.vue')
  }
];

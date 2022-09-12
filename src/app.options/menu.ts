import { RouterNames } from '@/router/router.names';

export const getMenuItems = () => [
  {
    label: 'Overview',
    path: { name: RouterNames.MAIN_PAGE }
  },
  {
    label: 'Portfolios',
    path: { name: RouterNames.PORTFOLIO_LIST_PAGE }
  },
  {
    label: 'Tokens',
    path: { name: RouterNames.TOKEN_LIST_PAGE }
  },
];

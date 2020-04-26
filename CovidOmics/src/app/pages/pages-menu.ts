import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ORIG: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];





export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OPCIONES',
    group: true,
  },
  {
    title: 'Busca',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Sube',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Analiza',
    icon: 'lock-outline',
    children: [
      {
        title: 'Hierarchical Clustering',
        link: '/auth/login',
      },
      {
        title: 'Tree EASE',
        link: '/auth/register',
      },
      {
        title: 'HCL Support Trees',
        link: '/auth/request-password',
      },
      {
        title: 'Self Organizing Tree Algoritm',
        link: '/auth/reset-password',
      },
      {
        title: 'KMC Support',
        link: '/auth/reset-password',
      },
      {
        title: 'QT Cluster',
        link: '/auth/reset-password',
      },
      {
        title: 'QT Validation',
        link: '/auth/reset-password',
      },
      {
        title: 'Self Organizing Map',
        link: '/auth/reset-password',
      },
      {
        title: 'Cluster Validation',
        link: '/auth/reset-password',
      },
    ],
  },
];

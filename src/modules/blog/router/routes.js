export default [
  {
    path: '/',
    component: () => import('../layouts/default'),
    children: [
      {
        path: '/',
        name: 'blog.index',
        component: () => import('../pages/index'),
        meta: {requiresAuth: false}
      },
      // search routes
      {
        path: 'search',
        name: 'blog.search',
        component: () => import('../pages/search/index'),
        props: true,
        meta: {requiresAuth: false}
      },
      // auth routes
      {
        path: 'login',
        name: 'blog.login',
        component: () => import('../pages/auth/login'),
        meta: {requiresAuth: false}
      },
      {
        path: 'register',
        name: 'blog.register',
        component: () => import('../pages/auth/register'),
        meta: {requiresAuth: false}
      },
      {
        path: 'forgot',
        name: 'blog.forgot',
        component: () => import('../pages/auth/forgot'),
        meta: {requiresAuth: false}
      },
      {
        path: 'rest/:token',
        name: 'blog.reset',
        component: () => import('../pages/auth/reset'),
        props: true,
        meta: {requiresAuth: false}
      },
      // category routes
      {
        path: 'category/:slug/:slug1?/:slug2?/:slug3*',
        name: 'blog.category',
        component: () => import('../pages/category/index'),
        props: true,
        meta: {requiresAuth: false}
      },
      // tag routes
      {
        path: 'tag/:slug',
        name: 'blog.tag',
        component: () => import('../pages/tag/index'),
        props: true,
        meta: {requiresAuth: false}
      },
      // author routes
      {
        path: 'author/:username',
        name: 'blog.author',
        component: () => import('../pages/author/index'),
        props: true,
        meta: {requiresAuth: false}
      },
      // post routes
      {
        path: ':slug',
        name: 'blog.post',
        component: () => import('../pages/post/index'),
        props: true,
        meta: {requiresAuth: false}
      },
      { // Always leave this as last one
        path: '*',
        component: () => import('../pages/404/index'),
        meta: {}
      }
    ]
  }
]

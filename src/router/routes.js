import { routesModules } from './../modules.js'
import _ from 'lodash'

let routes = [
  {
    path: '/default',
    meta: { layout: 'default', requiresAuth: true },
    component: () => import('layouts/default'),
    children: [
      // { path: '', component: () => import('pages/index') }
    ]
  }
]

_.forEach(routes, (route) => {
  if (routesModules[route.meta.layout]) {
    _.forEach(routesModules[route.meta.layout], (mroutes) => {
      route.children = _.concat(route.children, mroutes)
    })
  }
})

if (routesModules['noLayout']) {
  _.forEach(routesModules['noLayout'], (mroutes) => {
    routes = _.concat(routes, mroutes)
  })
}

routes.push(
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
    meta: {}
  }
)

export default routes

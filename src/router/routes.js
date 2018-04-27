import {routesModules} from './../modules.js'
import _ from 'lodash'

let routes = [
  {
    path: '/default',
    meta: {layout: 'default', requiresAuth: true},
    component: () => import('layouts/default'),
    children: [
      // { path: '', component: () => import('pages/index') }
    ]
  }
]

_.forEach(routes, function (route) {
  if (routesModules[route.meta.layout]) {
    _.forEach(routesModules[route.meta.layout], function (mroutes) {
      route.children = _.concat(route.children, mroutes)
    })
  }
})

if (routesModules['noLayout']) {
  _.forEach(routesModules['noLayout'], function (mroutes) {
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
console.log(routes)
export default routes

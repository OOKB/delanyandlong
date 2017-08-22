import { actionsFromObj, addRoutes, getInitState } from 'location-info'
import { keyBy } from 'lodash'

// Since route creation and menu creation is basically the same thing, put in the same file.
export const menu = keyBy([
  {
    id: 'about',
    name: 'About Us',
    icon: 'info-circle-btm',
  },
  {
    id: 'contact',
    name: 'Contact Us',
    icon: 'envelope-o',
  },
  {
    id: 'pricelist',
    href: '/collection',
    icon: 'object-ungroup',
    name: 'The Collection',
    routePath: '/collection(/*)',
  },
  {
    id: 'tradeLogin',
    routeId: 'login',
    icon: 'trade-login',
    name: 'Trade Login',
    validators: ['isAnonymous'],
  },
  {
    id: 'logout',
    action: 'logout',
    icon: 'sign-out',
    name: 'Logout',
    validators: ['isAuthenticated'],
  },
  {
    id: 'project',
    icon: 'heart-o',
    name: 'Favorites',
    routePath: '/project/:projectId',
    validators: ['isAnonymous', 'hasFavorites'],
  },
  {
    id: 'projects',
    icon: 'heart-o',
    name: 'Projects',
    routePath: '/project',
    validators: ['isAuthenticated', 'hasFavorites'],
  },
], 'id')
// Define our inital state object. This could be a fetch() to an API endpoint.
export const routes = {
  detail: '/detail/:id',
  itemEdit: '/edit/*',
  showroom: '/showroom',
}
export const locInfo = getInitState(actionsFromObj().concat(addRoutes(routes)))

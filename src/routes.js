import { actionsFromObj, addRoutes, getInitState } from 'location-info'
import { at, find, flow, isUndefined, keyBy, map, negate } from 'lodash/fp'
import { setField } from 'cape-lodash'

// Since route creation and menu creation is basically the same thing, put in the same file.
const menuItems = [
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
    route: false,
    routeId: null,
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
]
export const menu = flow(
  map(setField('routeId', flow(at(['routeId', 'id']), find(negate(isUndefined))))),
  keyBy('id')
)(menuItems)

// Define our inital state object. This could be a fetch() to an API endpoint.
export const routes = {
  detail: '/detail/:id',
  home: '/',
  itemEdit: '/edit/*',
  showroom: '/showroom',
}
export const locInfo = getInitState(actionsFromObj(menu).concat(addRoutes(routes)))

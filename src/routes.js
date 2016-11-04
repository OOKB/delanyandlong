import createRouter from 'location-info'
// import { parse } from 'query-string'
// const { addRoute, locationInfo } = createRouter({ parseSearch: parse, trailingSlash: false })

const { addRoutes, locationInfo } = createRouter()
addRoutes({
  home: '/',
  detail: '/detail/*',
  itemEdit: '/edit/*',
  pricelist: '/collection(/*)',
  project: '/project(/:id)',
})
addRoutes([ 'about', 'contact', 'favs', 'login', 'showroom' ])

export default locationInfo

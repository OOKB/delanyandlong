import createRouter from 'location-info'
// import { parse } from 'query-string'
// const { addRoute, locationInfo } = createRouter({ parseSearch: parse, trailingSlash: false })

const { addRoute, locationInfo } = createRouter()
addRoute('home', '/')
addRoute('about', '/about')
addRoute('contact', '/contact')
addRoute('collection', '/collection')
addRoute('detail', '/detail/*')
addRoute('itemEdit', '/edit/*')
addRoute('favs', '/favs')
addRoute('trade', '/trade')
addRoute('pricelist', '/trade/pricelist(/*)')
export default locationInfo

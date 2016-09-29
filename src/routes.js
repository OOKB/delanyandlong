import createRouter from 'location-info'
// import { parse } from 'query-string'
// const { addRoute, locationInfo } = createRouter({ parseSearch: parse, trailingSlash: false })

const { addRoute, locationInfo } = createRouter()
addRoute('home', '/')
addRoute('about', '/about')
addRoute('contact', '/contact')
addRoute('pricelist', '/collection(/*)')
addRoute('detail', '/detail/*')
addRoute('itemEdit', '/edit/*')
addRoute('favs', '/favs')
addRoute('login', '/login')
export default locationInfo

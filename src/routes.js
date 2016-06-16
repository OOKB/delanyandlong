import createRouter from 'location-info'
// import { parse } from 'query-string'
// const { addRoute, locationInfo } = createRouter({ parseSearch: parse, trailingSlash: false })

const { addRoute, locationInfo } = createRouter()
addRoute('home', '/')
addRoute('detail', '/detail/*')
addRoute('trade', '/trade')
addRoute('pricelist', '/trade/pricelist/*')
export default locationInfo

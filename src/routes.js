import reducer, { addRoutes } from 'location-info'

// Define our inital state object. This could be a fetch() to an API endpoint.
export const routes = {
  detail: '/detail/*',
  itemEdit: '/edit/*',
  pricelist: '/collection(/*)',
  projects: '/project',
  project: '/project/:projectId',
}

export default reducer(undefined, addRoutes(routes))

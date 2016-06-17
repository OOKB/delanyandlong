import { entityUpdate } from 'redux-graph'

export function missingImage({ id }) {
  return entityUpdate({ id, missingImg: true })
}

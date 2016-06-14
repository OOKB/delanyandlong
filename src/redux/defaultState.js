import keyBy from 'lodash/keyBy'
import entity from './defaultStateEntity'

export default {
  entity: keyBy(entity, 'id'),
}

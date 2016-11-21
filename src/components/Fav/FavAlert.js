import { get, partial } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { mapDispatchToProps } from 'cape-redux'
import { confirmItem } from 'cape-redux-collection'

import Component from './FavAlertEl'

function fieldInfo(listItem, fieldId) {
  const prefix = [ listItem.type, listItem.id ]
  return {
    id: `${listItem.id}-${fieldId}`,
    prefix: prefix.concat(fieldId),
    value: listItem[fieldId],
  }
}
function getSchema(state, { listItem }) {
  const descriptionInfo = fieldInfo(listItem, 'description')
  const positionInfo = fieldInfo(listItem, 'position')
  return {
    description: {
      ...descriptionInfo,
      description: 'Notes about item within collection.',
      label: 'Notes',
    },
    position: {
      ...positionInfo,
      description: 'Position within list.',
      label: 'Position',
    },
  }
}
function getMessage(state, { item, listItem }) {
  return `${item.id} has been added to your ${get(listItem, 'list.title', '')} collection!`
}
const getState = createStructuredSelector({
  message: getMessage,
  schema: getSchema,
})
const getActions = mapDispatchToProps(({ listItem }) => ({
  onClose: partial(confirmItem, listItem),
}))
export default connect(getState, getActions)(Component)

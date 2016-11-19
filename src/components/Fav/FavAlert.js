import { partial } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { mapDispatchToProps } from 'cape-redux'
import { confirmItem } from 'cape-redux-collection'

import Component from './FavAlertEl'

function getSchema(state, { listItem }) {
  const prefix = [ listItem.type, listItem.id ]
  return {
    description: {
      description: 'Notes about item within collection.',
      label: 'Notes',
      id: `${listItem.id}-description`,
      prefix: prefix.concat('description'),
      value: listItem.description,
    },
    position: {
      description: 'Position within list.',
      label: 'Position',
      id: `${listItem.id}-position`,
      prefix: prefix.concat('position'),
      value: listItem.position,
    },
  }
}
function getMessage(state, { item, listItem }) {
  return `${item.id} has been added to your ${listItem.mainEntity.title} collection!`
}
const getState = createStructuredSelector({
  message: getMessage,
  schema: getSchema,
})
const getActions = mapDispatchToProps(({ listItem }) =>
  ({ onClose: partial(confirmItem, listItem) })
)
export default connect(getState, getActions)(Component)

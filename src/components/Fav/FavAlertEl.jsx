import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import Link from 'redux-history-component'

import Box from './Box'
import Field from '../Editable/FieldWrapper'

function FavAlert({ listItem, message, onClose, schema, viewText }) {
  const projectId = get(listItem, 'list.id')
  return (
    <Box onClose={onClose} message={message}>
      <ul className="list-reset mb1">
        {/* <li><Field {...schema.position} /></li> */}
        <li><Field {...schema.description} /></li>
      </ul>
      {projectId &&
        <Link className="small uppercase" routeId="project" projectId={projectId} onClick={onClose}>
          {viewText}
        </Link>
      }
    </Box>
  )
}

FavAlert.propTypes = {
  listItem: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  schema: PropTypes.object,
  viewText: PropTypes.string.isRequired,
}
FavAlert.defaultProps = {
  viewText: 'View and share',
}
export default FavAlert

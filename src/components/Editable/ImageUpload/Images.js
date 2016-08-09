import React, { PropTypes } from 'react'
import map from 'lodash/map'
import merge from 'lodash/merge'

import DropZone from './DropZone'
import Uploaded from './Uploaded'

function Images({ entity, style, subject, width }) {
  return (
    <div style={merge({ display: 'flex' }, style)}>
      <DropZone
        prefix={[ 'dropZone', subject.id ]}
        subject={subject}
      />
      {entity &&
        <div className="image-grid" style={{ display: 'flex' }}>
          {map(entity, (field, fieldId) => (
            <Uploaded
              key={fieldId}
              entity={field}
              width={width}
            />
          ))}
        </div>
      }
    </div>
  )
}
Images.propTypes = {
  // createNewField: PropTypes.func.isRequired,
  entity: PropTypes.object,
  // entityPut: PropTypes.func.isRequired,
  // selectField: PropTypes.object.isRequired,
  style: PropTypes.object,
  // schema: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  // triplePut: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
}
Images.defaultProps = {
  style: {},
  width: 300,
}

export default Images

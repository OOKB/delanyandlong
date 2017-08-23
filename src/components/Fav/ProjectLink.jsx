import React from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-history-component'
import Button from '../Button'

function ProjectLink({ edit, id, title }) {
  return (
    <li className="p1 bt1 fs0p8 ls0p15 relative">
      <Link className="block uppercase" routeId="project" projectId={id}>{title}</Link>
      {title !== 'Favorites' && (
        <Button
          icon="pencil"
          className="edit top-1 right-0"
          title="Edit project name"
          onClick={edit}
        />
      )}
    </li>
  )
}
ProjectLink.propTypes = {
  edit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
ProjectLink.defaultProps = {
}

export default ProjectLink

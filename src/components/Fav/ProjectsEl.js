import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Page from '../Page'

function ProjectsEl({ lists }) {
  return (
    <Page id="projects">
      <ul className="list-reset clearfix">
        {map(lists, list =>
          <li key={list.id}>{list.title}</li>
        )}
      </ul>
    </Page>
  )
}
ProjectsEl.propTypes = {
  lists: PropTypes.object.isRequired,
}
ProjectsEl.defaultProps = {
}

export default ProjectsEl

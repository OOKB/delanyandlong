import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Link from 'redux-history-component'
import { projectLink } from '../../redux/collection'
import Page from '../Page'

function ProjectsEl({ lists }) {
  return (
    <Page id="projects">
      <ul className="list-reset clearfix">
        {map(lists, list =>
          <li key={list.id}><Link href={projectLink(list)}>{list.title}</Link></li>
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

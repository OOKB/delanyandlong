import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Link from 'redux-history-component'
import { projectLink } from '../../redux/collection'
import Page from '../Page'

function ProjectsEl({ lists }) {
  return (
    <Page id="projects">
      <main className="clear m1 mt4 clearfix">
        <h1 className="text-center m0 mb1 uppercase fs1 ls0p15">Projects</h1>
        <ul className="list-reset clearfix text-center mt1 bb1 five mlrauto">
          {map(lists, list =>
            <li className="p1 bt1" key={list.id}><Link className="block uppercase" href={projectLink(list)}>{list.title}</Link></li>
          )}
        </ul>
      </main>
    </Page>
  )
}
ProjectsEl.propTypes = {
  lists: PropTypes.object.isRequired,
}
ProjectsEl.defaultProps = {
}

export default ProjectsEl

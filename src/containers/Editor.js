import { connect } from 'react-redux'

import { editorSelector as mapStateToProps } from '../redux/select/editor'

import { endFavorite } from '../redux/project/actions'
const mapDispatchToProps = { endFavorite }

import Component from '../components/Editable/Editor'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

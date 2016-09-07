import { connect } from 'react-redux'

import { itemCollections as mapStateToProps } from '../redux/project/select'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/project/actions'
const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

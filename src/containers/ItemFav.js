import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { favsItemIndex } from '../redux/project/select'

export const mapStateToProps = createSelector(
  favsItemIndex,
  (state, props) => props.item,
  (favs, item) => favs && favs[item.id] || {}
)

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/project/actions'
const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

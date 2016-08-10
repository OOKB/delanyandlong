import { connect } from 'react-redux'
import { close, open } from 'redux-field'

import { itemDetailSelector as mapStateToProps } from '../redux/select/item'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/dispatch/favs'

const mapDispatchToProps = { close, confirmFavorite, endFavorite, favoriteItem, open }

import Component from '../components/Detail/Detail'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

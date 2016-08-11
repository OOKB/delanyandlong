import { connect } from 'react-redux'
import { close, open } from 'redux-field'

import { itemDetailSelector as mapStateToProps } from '../redux/select/item'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/dispatch/favs'
import { detailClose } from '../redux/dispatch/items'

const mapDispatchToProps = { close, confirmFavorite, detailClose, endFavorite, favoriteItem, open }

import Component from '../components/Detail/Detail'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

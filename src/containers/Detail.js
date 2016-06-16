import { connect } from 'react-redux'

import { itemDetailSelector as mapStateToProps } from '../redux/select/item'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/favs'
const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

import Component from '../components/Detail/Detail'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

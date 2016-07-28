import { connect } from 'react-redux'

import { favoriteSelector as mapStateToProps } from '../redux/select/item'

import { confirmFavorite, endFavorite, favoriteItem } from '../redux/dispatch/favs'
const mapDispatchToProps = { confirmFavorite, endFavorite, favoriteItem }

import Component from '../components/Fav'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

import { connect } from 'react-redux'

import { favoritesSelector as mapStateToProps } from '../redux/select/fav'

import { endFavorite } from '../redux/dispatch/favs'
const mapDispatchToProps = { endFavorite }

import Component from '../components/Favs'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

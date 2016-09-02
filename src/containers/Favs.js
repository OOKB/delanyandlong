import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { listItemsSorted } from '../redux/project/select'

export const mapStateToProps = createStructuredSelector({
  favorites: listItemsSorted,
})

import { endFavorite } from '../redux/project/actions'
const mapDispatchToProps = { endFavorite }

import Component from '../components/Favs'

export default connect(mapStateToProps, mapDispatchToProps)(Component)

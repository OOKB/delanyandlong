import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { endFavorite } from 'cape-redux-collection'

import { listItemsSorted } from '../redux/collection'
import Component from '../components/Favs'

export const mapStateToProps = createStructuredSelector({
  favorites: listItemsSorted,
})

const mapDispatchToProps = { endFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(Component)

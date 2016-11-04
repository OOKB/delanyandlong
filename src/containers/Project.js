import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { endFavorite } from 'cape-redux-collection'
import { projectItemsSorted } from '../redux/collection'
import Component from '../components/Fav/Favs'

export const mapStateToProps = createStructuredSelector({
  favorites: projectItemsSorted,
})

const mapDispatchToProps = { endFavorite }

export default connect(mapStateToProps, mapDispatchToProps)(Component)

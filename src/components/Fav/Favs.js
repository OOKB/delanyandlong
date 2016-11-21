import React, { PropTypes } from 'react'
import { find, map, size } from 'lodash'
import { PREDICATE } from 'cape-redux-collection'

import Page from '../Page'
import Item from '../Item'

function FavsList({ listItems, imgSize }) {
  return (
    <div>
      <ul className="item-grid list-reset clearfix">
        {map(listItems, listItem =>
          <Item className="relative" key={listItem.id} item={listItem.item} imgSize={imgSize} />
        )}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  listItems: PropTypes.object.isRequired,
  imgSize: PropTypes.string.isRequired,
}
FavsList.defaultProps = {
  imgSize: '?w=250&h=187&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}

function listHasItems(list) {
  return (size(list[PREDICATE]) > 0) && !!find(list[PREDICATE]).item
}

function Favs({ emptyText, list }) {
  const hasFavorites = listHasItems(list)
  return (
    <Page id="favorites">
      <main className="clear m1 mt4 clearfix">
        {hasFavorites &&
          <h1 className="text-center m0 bb1 mb1 fw400 uppercase fs1 ls0p15">{list.title}</h1>
        }
        {hasFavorites && <FavsList listItems={list[PREDICATE]} />}
        {!hasFavorites &&
          <div className="loading text-center">
            <p>{emptyText}</p>
            <i className="fa fa-multiplication fa-spin fa-3x fa-fw light-gray" />
            <span className="sr-only">Loading...</span>
          </div>
        }
      </main>
    </Page>
  )
}
Favs.propTypes = {
  emptyText: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
}
Favs.defaultProps = {
  emptyText: 'There are no items in this project. (or we might just be encountering a loading delay)',
}
export default Favs

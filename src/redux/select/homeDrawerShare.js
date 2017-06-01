import { get, pick } from 'lodash/fp'
// import { entityTypeSelector } from 'redux-graph'
import { createSelector } from 'reselect'
import { getSelect, select } from 'cape-select'

export const graphDb = get('graph2')
export const drawers = select(graphDb, 'HomeDrawer')
export const images = select(graphDb, 'ImageObject')
export const activeId = select(graphDb, 'WebAppSetting.activeDrawer._ref.mainEntity.id')
export const getDrawer = getSelect(drawers, activeId)
export const getImageId = get('_ref.image.id')
export const drawerFields = pick(['id', 'title', 'description', 'image'])
export function attachImage(drawer, imgs) {
  // console.log(drawer)
  const imageId = getImageId(drawer)
  const image = get('url', get(imageId, imgs))
  return (image && drawerFields({
    ...drawer,
    image,
  })) || null
}
export const selectActiveDrawer = createSelector(
  getDrawer, images, attachImage
)

// export const selectActiveDrawerId = select(selectActiveDrawerEntity, 'mainEntity.id')
// export const selectDrawerEntity = getSelect(drawerEntity, selectActiveDrawerId)
// export const selectActiveDrawer = fullEntitySelector(selectDrawerEntity)

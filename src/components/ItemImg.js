import React, { PropTypes } from 'react'

function ItemImg({ img, id, imgixExt }) {
  const imgSize = imgixExt
  return <img
            src={img.concat(imgSize)}
            alt={id} title={id}
            />
}

ItemImg.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgixExt: PropTypes.string.isRequired,
}

export default ItemImg

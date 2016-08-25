import React, { PropTypes } from 'react'

function ItemImg({ img, id }) {
  return <img src={img} alt={id} title={id} />
}

ItemImg.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default ItemImg

import React, { PropTypes } from 'react'
import { partial } from 'lodash'
import marked from 'marked'
import Close from './CloseButton'

function Drawer(props) {
  const {
    description, id, image, imgSize, onClose, title, user,
  } = props
  return (
    <section className="drawer bg-light-gold p2 relative inset-shadow">

      <Close onClick={partial(onClose, user, id)} className="close right-1 top-1" />

      {/* <div className="mb0 pb0 maxw50rem mlrauto clearfix text-center flex-center"> */}
      <div className="mb0 pb0 maxw50rem mlrauto clearfix text-center">

        <img
          alt={title}
          className="six mb0 mr1 b1 p05 white mlrauto"
          src={image + imgSize}
        />

        {/* <div className="six mb0 ml1">
          <h1 className="dark-gold m0 mb05">{title}</h1>
          { description &&
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
          }
        </div> */}

      </div>

    </section>
  )
}

export const urlProp = PropTypes.shape({
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})
Drawer.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imgSize: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
}
Drawer.defaultProps = {
  imgSize: '?w=700',
}

export default Drawer

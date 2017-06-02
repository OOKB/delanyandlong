import React, { PropTypes } from 'react'
import { partial } from 'lodash'
import Link from 'redux-history-component'
import marked from 'marked'
import Close from './CloseButton'

function Drawer(props) {
  const {
    collectionLink, description, id, image, imgSize, onClose, sisterSite, title, user,
  } = props
  return (
    <section className="drawer bg-light-gold p2 relative inset-shadow">

      <Close onClick={partial(onClose, user, id)} className="close right-1 top-1" />

      <div className="mb0 pb0 maxw50rem mlrauto clearfix text-center">

        <img
          alt={title}
          className="six columns mb0 b1 p05 white mlrauto"
          src={image + imgSize}
        />

        <div className="six columns mb0">
          <h1 className="dark-gold m0 mb05">{title}</h1>
          { description &&
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: marked(description) }}
            />
          }
          {collectionLink && <p className="mt1 p0 mono">
            <Link href={collectionLink.href} title={collectionLink.title}>
              {collectionLink.title}
            </Link>
          </p>}
          {sisterSite && <p className="mt1 p0 mono">
            <a href={sisterSite.href} title={sisterSite.title}>
              {sisterSite.title}
            </a>
          </p>}
        </div>

      </div>

    </section>
  )
}

const urlProp = PropTypes.shape({
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
})
Drawer.propTypes = {
  collectionLink: urlProp,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imgSize: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  sisterSite: urlProp,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
}
Drawer.defaultProps = {
  collectionLink: {
    title: 'Explore the Delany & Long collection.',
    href: 'collection',
  },
  imgSize: '?w=700',
  sisterSite: {
    title: 'Explore the Rogers & Goffigon collection.',
    href: 'http://www.rogersandgoffigon.com/#collection',
  },
}

export default Drawer

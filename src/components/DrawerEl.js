import React, { PropTypes } from 'react'
import Link from 'redux-history-component'
import Close from './CloseButton'

function Drawer({ blurb, collectionLink, img, onClose, sisterSite, title }) {
  return (
    <section className="drawer bg-light-gold p2 relative inset-shadow">

      <Close onClick={onClose} className="close right-1 top-1" />

      <div className="mb0 pb0 maxw50rem mlrauto clearfix">

        <img
          alt="A Meta Website Self-Portrait"
          className="six columns mb0 b1 p05 white"
          src={img}
        />

        <div className="six columns mb0">
          <h1 className="dark-gold m0 mb05">{title}</h1>
          <p className="m0">{blurb}</p>
          <p className="mt1 p0 mono">
            <Link href={collectionLink.href} title={collectionLink.title}>
              {collectionLink.title}
            </Link>
          </p>
          <p className="mt1 p0 mono">
            <Link href={sisterSite.href} title={sisterSite.title}>
              {sisterSite.title}
            </Link>
          </p>
        </div>

      </div>

    </section>
  )
}

Drawer.propTypes = {
  blurb: PropTypes.string.isRequired,
  collectionLink: PropTypes.object.isRequired,
  disclaimer: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  sisterSite: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}
Drawer.defaultProps = {
  blurb: 'Among many features, the DeLany & Long website links to the Rogers & Goffigon website, so you can easily view both collections.',
  disclaimer: 'All fabrics sold as is. All sales Final. No returns or exchanges. Payment by check or credit card.',
  id: 'newSite',
  img: 'https://delanyandlong.imgix.net/drawer/20161123-dlAnouncement.jpg?w=400',
  title: 'DeLany & Long is excited to announce a brand new website!',
  collectionLink: {
    title: 'Explore the Delany & Long collection.',
    href: 'collection',
  },
  sisterSite: {
    title: 'Explore the Rogers & Goffigon collection.',
    href: 'http://www.rogersandgoffigon.com/',
  },
}

export default Drawer

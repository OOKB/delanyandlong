import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from 'redux-history-component'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import Grid from '../ItemGrid'
import Film from '../FilmStrip'
import Page from '../Page'
import SummerText from '../SummerText'
import { pricelistSelector } from '../../redux/select/pricelist'

function DisclaimerLink({ content, link: { href, title } }) {
  return (
    <p>
      {content} <Link href={href} title={title}>{title}</Link>.
    </p>
  )
}

function Pricelist(props) {
  const { categoryKey, info, lead, pager, imgSize, ...disclaimer } = props
  const { items, ...pagerInfo } = pager
  const { category, columns, displayStyle, prefix, printWhenColor } = info
  const display = id => displayStyle.active === id
  const list = display('list')
  return (
    <Page id="container-pricelist" className={category.activeCategory}>
      <main className="clear m1 mt2">
        <Search {...info} pagerInfo={pagerInfo} />
        {list && <Table columns={columns} items={items} printWhenColor={printWhenColor} />}
        {display('grid') && <Grid items={items} imgSize={imgSize} />}
        {display('film') && <Film {...pagerInfo} prefix={prefix.pgIndex} />}
        <div className="text-center small">
          <ul className="bt1 bb1 py1 list-reset list-inline tableKey mb05">
            {categoryKey.map((pText, index) => <li className={pText} key={index}><p className="m0">{pText}</p></li>)}
          </ul>
          <SummerText />
          <p className="uppercase">{lead}</p>
          <DisclaimerLink {...disclaimer} />
        </div>
      </main>
    </Page>
  )
}
Pricelist.propTypes = {
  categoryKey: PropTypes.array.isRequired,
  content: PropTypes.string.isRequired,
  imgSize: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  lead: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  disclaimer: PropTypes.object,
  pager: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
  lead: 'All fabrics are Water, Mildew and Stain Resistant',
  imgSize: '?w=250&h=187&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}
export default connect(pricelistSelector)(Pricelist)

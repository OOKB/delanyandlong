import React, { PropTypes } from 'react'

function Header() {
  return (
    <header>
      <section id="top-navigation" className="container-fluid nopadding">
        <div className="row nopadding ident e-bg-light-texture">
          {/* Photo */}
          <a href="index.html#!">
            <div className="col-md-5 col-lg-4 vc-photo">&nbsp;</div>
          </a>
          {/* /Photo */}
          <div className="col-md-7 col-lg-8 vc-name nopadding">
            {/* Name-Position */}
            <div className="row nopadding name">
              <div className="col-md-10 name-title">
                <h2 className="font-accident-two-light uppercase">S/V Owl</h2>
              </div>
              <div className="col-md-2 nopadding name-pdf">
                <a href="index.html#" className="hvr-sweep-to-right">
                  <i className="flaticon-download149" title="Download CV.pdf" />
                </a>
              </div>
            </div>
            <div className="row nopadding position">
              <div className="col-md-10 position-title">
                <section className="cd-intro">
                  <h4 className="cd-headline clip is-full-width font-accident-two-normal uppercase">
                    <span>Sailing around </span>
                    <span className="cd-words-wrapper">
                      <b className="is-visible">Lake Superior</b>
                      <b>The Apostle Islands</b>
                      <b>The Atlantic?</b>
                    </span>
                  </h4>
                </section>
              </div>
              <div className="col-md-2 nopadding pdf">
                <a href="index.html#" className="hvr-sweep-to-right">
                  <i className="flaticon-behance7" title="My Behance Portfolio" /></a>
              </div>
            </div>
            {/* /Name-Position */}
            {/* Main Navigation */}
            <ul id="nav" className="row nopadding cd-side-navigation">
              <li className="col-xs-4 col-sm-2 nopadding menuitem green">
                <a href="index.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-insignia" /><span>home</span></a>
              </li>
              <li className="col-xs-4 col-sm-2 nopadding menuitem blue">
                <a href="resume.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-graduation61" /><span>resume</span></a>
              </li>
              <li className="col-xs-4 col-sm-2 nopadding menuitem cyan">
                <a href="portfolio.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-book-bag2" /><span>portfolio</span></a>
              </li>
              <li className="col-xs-4 col-sm-2 nopadding menuitem orange">
                <a href="contacts.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-placeholders4" /><span>contacts</span></a>
              </li>
              <li className="col-xs-4 col-sm-2 nopadding menuitem red">
                <a href="feedback.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-earphones18" /><span>feedback</span></a>
              </li>
              <li className="col-xs-4 col-sm-2 nopadding menuitem yellow">
                <a href="blog.html" className="hvr-sweep-to-bottom">
                  <i className="flaticon-pens15" /><span>blog</span></a>
              </li>
            </ul>
            {/* /Main Navigation */}
          </div>
        </div>
      </section>
    </header>
    )
}
Header.propTypes = {
}
export default Header

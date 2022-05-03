import * as React from 'react'
import { Link } from 'gatsby'

import homeSliderBanner from '../../images/willage-3.png'

export const Slide3 = () => (
  <section
    className="homepage-slider-banner"
    style={{
      backgroundImage: `url(${homeSliderBanner})`,
    //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${homeBanner})`,
    }}
  >
    <div className="slider-content container grid-container">
      <div>
        <br></br>
        <div class="leftoverlay">
          <h2 className="slider-title">Willage.io</h2>
          <p className="slider-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede
            asdf.
          </p>
          <Link to="/about" className="banner-button">
            Learn More
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
        <div class="upoverlay">
          <div class="line"></div>
        </div>
    </div>
    
  </section>
)
import * as React from 'react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'

import { Slide1 } from '../components/HomePageSlider/Slide1'
import { Slide2 } from '../components/HomePageSlider/Slide2'
import { Slide3 } from '../components/HomePageSlider/Slide3'
import { Slide4 } from '../components/HomePageSlider/Slide4'

const Homepage = () => (
  <Layout isHomepage>
    <Seo title="Home" />
    <HomepageBanner />
    <br></br>
    <Slide1 />
    <br></br>
    <Slide2 />
    <br></br>
    <Slide3 />
    <br></br>
    <Slide4 />
    {/* <MainContent /> */}
  </Layout>
)

export default Homepage
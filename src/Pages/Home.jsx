import React from 'react'
import Banner from '../Component/PageComponent/Home/Banner'
import Innovate from '../Component/PageComponent/Home/Innovate'
import OurWorks from '../Component/PageComponent/Home/OurWorks'
import Strategy from '../Component/PageComponent/Home/Strategy'
import Testimonial from '../Component/PageComponent/Home/Testimonial'
import OurService from '../Component/PageComponent/Home/OurService'
import AboutUs from '../Component/PageComponent/Home/AboutUs'

const Home = () => {
  return (
    <div>
     
      <Banner/>
      <Innovate/>
      <OurWorks/>
      <Strategy/>
      <Testimonial/>
      <OurService/>
      <AboutUs/>
    </div>
  )
}

export default Home

import React from 'react'
import Banner from '../Component/PageComponent/Home/Banner'
import Innovate from '../Component/PageComponent/Home/Innovate'
import OurWorks from '../Component/PageComponent/Home/OurWorks'
import Strategy from '../Component/PageComponent/Home/Strategy'
import Testimonial from '../Component/PageComponent/Home/Testimonial'
import OurService from '../Component/PageComponent/Home/OurService'
import AboutUs from '../Component/PageComponent/Home/AboutUs'
import OurTeam from '../Component/PageComponent/Home/OurTeam'
import Blog from '../Component/PageComponent/Home/Blog'
import ContactUs from '../Component/PageComponent/Home/ContactUs'
import LetsGetStarted from '../Component/PageComponent/Home/LetsGetStarted'

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
      <OurTeam/>
      <Blog/>
      <ContactUs/>
      <LetsGetStarted/>
    </div>
  )
}

export default Home

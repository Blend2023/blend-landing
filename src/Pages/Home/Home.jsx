import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import HighQuality from './Components/HighQuality/HighQuality'
import Upscale from './Components/Upscale/Upscale'
import Revenue from './Components/Revenue/Revenue'
import DiscoverMore from './Components/DiscoverMore/DiscoverMore'
import Footer from './Components/Footer/Footer'
import "./home.css"
const Home = () => {
  return (
    <div className="home_page">
      <div className="home_page_wrap">
        <div className="home_page_content">
          <Navbar/>
          <Banner/>
          <HighQuality/>
          <Upscale/>
          <Revenue/>
          <DiscoverMore/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
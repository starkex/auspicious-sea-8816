import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import ImageCat from './ImageCat'
import Navbar from './Navbar'

function Home() {
  return ( <div>
    <Navbar/>
    <Hero/>
    <ImageCat/>
    <Footer/>
    </div>
  )
}

export default Home
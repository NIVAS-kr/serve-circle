import React from 'react'
import './Home.css'
import Header from './Header'
import HappyClients from './HappyClients'
import Signup15 from './Signup15'
import UnlmtdBranch from './UnlmtdBranch'
import AllinOne from './AllinOne'
import Footer from './Footer'
import Banner from './Banner'

const Home = () => {
  return (
    <>
        <div className='coloured-home' >
        <Header/>
        <Banner/>
        </div>

        <AllinOne/>
        <UnlmtdBranch/>
        <HappyClients/>
        <Signup15/>
        <Footer/>
    </>
  )
}

export default Home
// In React 17 you no longer need to import react when writing JSX
import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner />
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from './navber/page'
import BabuMenu from './babyMenu/page'
import BabuMCarousele from './carousel/page'
import BabuInputFeild from './babyInputFrom/page'
import DoctorInfo from './doctorInfo/page'

export default function Home() {
  return (
    <div className=' bg-slate-300'>
      <Navbar />
      <BabuMenu />
      <BabuMCarousele />
      <BabuInputFeild />
      <DoctorInfo />
    </div>
  )
}

import Image from 'next/image'
import Header from './(Components)/Header/Header'
import OurClients from './(Components)/OurClients/OurClients'
import Membership from './(Components)/Membership/Membership'
import BigCard from './(Components)/BigCard/BigCard'
import CardImage1 from '../public/Assets/InputForm.jpg'

export default function Home() {
  return (
    <>
      <Header />
      <OurClients />
      <Membership />
      <br />
      <BigCard heading="" img={CardImage1} />

    </>
  )
}

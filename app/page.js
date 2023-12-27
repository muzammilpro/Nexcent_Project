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
      <BigCard heading="The Unseen of spending three year at Pixelgrade" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates beatae corrupti hic quaerat recusandae provident ad nesciunt quasi vitae ea modi itaque voluptatibus eos magnam, alias mollitia laudantium similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque temporibus illo velit officia, non assumenda repudiandae aliquid quis aspernatur placeat. Ea sapiente libero repellat amet sequi, enim ratione quam." img={CardImage1} />
       <br />
       
    </>
  )
}

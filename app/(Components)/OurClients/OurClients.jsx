import React from 'react'
import Image from 'next/image'
import './OurClients.css'
import img1 from '../../../public/Assets/ourClientImg01.jpg'
import img2 from '../../../public/Assets/ourClientImg02.jpg'
import img3 from '../../../public/Assets/ourClientImg03.jpg'
import img4 from '../../../public/Assets/ourClientImg04.jpg'
import img5 from '../../../public/Assets/ourClientImg05.jpg'

export default function OurClients() {
  return (
    <div>
      <center>
        <p className='Heading'>Our Clients</p> <br />
        <p>we have been working with some Fortune 500+ clients</p>
      </center>
      <div className='imageSection'>
        <Image src={img1} className='img1' alt="Image" />
        <Image src={img2} className='img2' alt="Image" />
        <Image src={img3} className='img3' alt="Image" />
        <Image src={img4} className='img4' alt="Image" />
        <Image src={img5} className='img5' alt="Image" />
      </div>
    </div>
  )
}

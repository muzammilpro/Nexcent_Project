import React from 'react'
import Card from '../Card/Card'
import './Membership.css'
import peopleImg  from '../../../public/Assets/People.jpg'
import Building  from '../../../public/Assets/Building.jpg'
import Hands  from '../../../public/Assets/Hands.jpg'

export default function Membership() {
  return (
    <div>
      <center>
        <p className="Heading">Manage your entire community <br /> in a single system</p>
        <p>Who is Nexcent suitable for?</p>
      </center>
      <br />
      <div className='cardSection'>
        <Card src={peopleImg}  heading="Membership organisations" text="Our membership management software provides full automation of membership renewalls and payments"/>
        <Card src={Building} heading="National Association" text="Our membership management software provides full automation of membership renewalls and payments"/>
        <Card src ={Hands} heading="Clubs And Groups" text="Our membership management software provides full automation of membership renewalls and payments"/>
      </div>
    </div>
  )
}

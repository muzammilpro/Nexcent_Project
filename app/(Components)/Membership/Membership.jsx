import React from 'react'
import Card from '../Card/Card'
import './Membership.css'

export default function Membership() {
  return (
    <div>
      <center>
        <p className="Heading">Manage your entire community <br /> in a single system</p>
        <p>Who is Nexcent suitable for?</p>
      </center>
      <div className='cardSection'>
        <Card  heading="Membership organisations" text="Our membership management software provides full automation of membership renewalls and payments"/>
        <Card  heading="National Association" text="Our membership management software provides full automation of membership renewalls and payments"/>
        <Card  heading="Clubs And Groups" text="Our membership management software provides full automation of membership renewalls and payments"/>
      </div>
    </div>
  )
}

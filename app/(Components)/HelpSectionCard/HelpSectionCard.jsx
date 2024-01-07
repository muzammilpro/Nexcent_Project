import React from 'react'
import Image from 'next/image'
import './HelpSectionCard.css'

export default function HelpSectionCard(props) {
  return (
    <div className='HelpCardParent'>
      <div>
        <Image className='helpCardImage'  src={props.src} />
      </div>
      <div>
        <p className='Heading'>{props.numbers}</p>
        <p>Members</p>
      </div>
    </div>
  )
}

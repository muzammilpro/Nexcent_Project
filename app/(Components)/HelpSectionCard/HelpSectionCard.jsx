import React from 'react'
import Image from 'next/image'
import './HelpSectioCard.css'

export default function HelpSectionCard(props) {
  return (
    <div className='HelpCardParent'>
      <div>
        <Image className='helpCardImage'  src={props.src} />
      </div>
      <div>
        <p className='Heading'>2,245,341</p>
        <p>Members</p>
      </div>
    </div>
  )
}

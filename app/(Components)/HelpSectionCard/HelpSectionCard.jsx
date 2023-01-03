import React from 'react'
import Image from 'next/image'

export default function HelpSectionCard(props) {
  return (
    <div className='HelpCardParent'>
      <div>
        <Image src={props.src} />
      </div>
      <div>
        <p className='Heading'>2,245,341</p>
        <p>Members</p>
      </div>
    </div>
  )
}

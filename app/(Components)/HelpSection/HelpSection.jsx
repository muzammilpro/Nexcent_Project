import React from 'react'
import Image from 'next/image'
import './HelpSection.css'
import HelpSectionCard from '../HelpSectionCard/HelpSectionCard'
import peopleImg from '../../../public/Assets/People.jpg'

export default function HelpSection() {
    return (
        <div className='HelpSectionParentDiv'>
            <div>
                <Image src={peopleImg} />
            </div>
            <div>
                <HelpSectionCard src={peopleImg} numbers="2,245,341" text="Membership"/>
            </div>
        </div>
    )
}

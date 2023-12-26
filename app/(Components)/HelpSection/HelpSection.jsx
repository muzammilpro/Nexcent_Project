import React from 'react'
import Image from 'next/image'
import HelpSectionCard from '../HelpSectionCard/HelpSectionCard'
import peopleImg from '../../../public/Assets/People.jpg'

export default function HelpSection() {
    return (
        <div>
            <div>
                <Image src={peopleImg} />
            </div>
            <div>
                <HelpSectionCard numbers="2,245,341" text="Membership"/>
            </div>
        </div>
    )
}

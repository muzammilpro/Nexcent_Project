import Image from 'next/image'
import React from 'react'
import './BigCard.css'
import Button from '../Button/Button'

export default function BigCard(props) {
    return (
        <div className='ParentDiv'>
            <div className='imageDiv'>
                <Image src={props.img} className='cardImage' />
            </div>
            <div className='textDiv'>
                <p className='Heading'>{props.heading}</p> <br />
                <p>{props.text}</p>
                <br />
                <Button text="Learn More" />
            </div>
        </div>
    )
}

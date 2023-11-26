import React from 'react'
import Image from 'next/image'
import './Card.css'

export default function Card(props) {
    return (
        <div className=" Card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <center>
          <Image src={props.src} className='Image' alt="Picture"/>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.text}</p>
          </center>
        </div>

    )
}

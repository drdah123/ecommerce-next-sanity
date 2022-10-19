import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/Client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-container-min'>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt='tesla s plaid' className='hero-banner-image' />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button' className='hero-button-text'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc '>
            <h5>description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import './brand.css';
import { google, facebook, github,slack} from './imports.js';

const Brand = () => {
  return (
    <div className='gpt4_brand section_padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={facebook} alt="fb" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={github} alt="github" />
      </div>
    </div>
  )
}

export default Brand
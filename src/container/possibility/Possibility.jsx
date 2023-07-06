import React from 'react';
import './possibility.css';
import possibilityImage  from '../../assets/possibilityImage.png';
const Possibility = () => {
  return (
    <div className='gpt4_possibility section_padding' id='possibility'>
      <div className='gpt4_possibility-image'>
        <img src={possibilityImage} alt="VRHeadset" />
      </div>
      <div className='gpt4_possibility-content'>
        <h4>Request Early Access to Get Started.</h4>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started.</h4>
      </div>
    </div>
  )
}

export default Possibility
import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt4_header section_padding'>
      <div className='gpt4_header-content'>
        <h1 className='gradient_text'>
          Let's Build Something amazing with GPT-4 OpenAI
        </h1>
        <p>ChatGPT is an advanced AI language model developed
          by OpenAI. Trained on extensive datasets, it possesses
          a broad knowledge base and exceptional linguistic
          capabilities. ChatGPT's purpose is to assist users
          by providing accurate information, engaging in
          conversations, and offering insightful and creative
          responses across various topics.</p>
        <div className='gpt4_header-content_input'>
          <input type="email" placeholder='Your email ID' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt4_header-content_people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours </p>
        </div>

      </div>

      <div className='gpt4_header-image'>
        <img src={ai} alt="ai" />
      </div>
      
    </div>
  )
}

export default Header
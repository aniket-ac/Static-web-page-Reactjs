import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featData =[
  {
    title:'Improving and distrusts instantly',
    text:'GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.'
  },
  {
    title:'Become th tended active',
    text:'Chatbots are remarkable creations of artificial intelligence, designed to interact with users and provide helpful and prompt responses.'
  },
  {
    title:'Message or am nothing',
    text:'A knowledge base is a comprehensive repository of information, facts, and insights that serves as a valuable resource.'
  },
  {
    title:'Really boy law county',
    text:'Education is a transformative process that empowers individuals with knowledge, skills, and critical thinking abilities.'
  },
]

const Features = () => {
  return (
    <div className='gpt4_features section_padding' id='features'>
      <div className='gpt4_features-heading'>
        <h1 className='gradient_text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make It Happen.</h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className='gpt4_features-container'>
        {
          featData.map((item,index)=>(
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features
import React from 'react';
import './whatgpt4.css';
import { Feature } from '../../components';

const WhatGPT4 = () => {
  return (
    <div className='gpt4_whatgpt4 section_margin' id="wgpt4">
      <div className='gpt4_whatgpt4-feature'>
        <Feature title="What's GPT4" text="GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style." />
      </div>
      <div className='gpt4_whatgpt4-heading'>
        <h1 className='gradient_text'>The Possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt4_whatgpt4-container'>
        <Feature title="ChatBot" text="
Chatbots are remarkable creations of artificial intelligence, designed to interact with users and provide helpful and prompt responses. "/>
        <Feature title="Knowledge Base" text="A knowledge base is a comprehensive repository of information, facts, and insights that serves as a valuable resource." />
        <Feature title="Education" text="
Education is a transformative process that empowers individuals with knowledge, skills, and critical thinking abilities. "/>
      </div>
    </div>
  )
}

export default WhatGPT4
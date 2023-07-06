import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog1,blog2,blog3,blog4,blog5 } from './imports'
const Blog = () => {
  return (
    <div className='gpt4_blog section_padding' id='blog'>
      <div className='gpt4_blog-heading'>
        <h1 className='gradient_text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt4_blog-container'>
        <div className='gpt4_blog-container_grpA'>
          <Article imgUrl={blog1} date="Sept 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt4_blog-container_grpB'>
          <Article imgUrl={blog2} date="Sept 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog3} date="Sept 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog4} date="Sept 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog5} date="Sept 20, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
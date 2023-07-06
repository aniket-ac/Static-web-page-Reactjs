import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

// BEM -> Block Element Modifier

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt4">What is GPT4</a></p>
    <p><a href="#possibility">OpenAI</a></p>
    <p><a href="#features">Case Study</a></p>
    <p><a href="#blog">Liberary</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt4_navbar'>
      <div className='gpt4_navbar-links'>
        <div className='gpt4_navbar-links_logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='gpt4_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt4_navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt4_navebar-menu'>
        {toggleMenu
          ? <RiCloseLine color='black' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt4_navbar-menu_container scale-up-center' >
            <div className='gpt4_navbar-menu_container-links'>
              <Menu />
              <div className='gpt4_navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
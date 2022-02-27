import React from 'react';
import logo from '../logo.svg'

import './component.styles.css'

export default function Header() {
  return (
    <nav className='nav'>
      <img className='nav-logo' src={logo} />
      <h3 className='nav-brand'>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}
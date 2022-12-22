import React from 'react'
import LeftImage from '../assets/images/img-2.svg';
import RightImage from '../assets/images/img-1.svg';
import { NavLink } from 'react-router-dom';

const ShowCase: React.FC = () => {
  return (
    <section className='showcase container '>
      <img className='LeftImage' src={LeftImage} alt="showcase"/>
      <div className="showcase-body">
        <h1>Sale Up </h1>
        <h1>To 50% Off</h1>
        <p>Online shopping free home delivery over $100</p>
        <NavLink className="btn-theme" to={''}>
          <span className="corner-left"></span>
          SHOP NOW
          <span className="corner-right"></span>
        </NavLink>
      </div>
      <img className='RightImage' src={RightImage} alt="showcase"/>
      
    </section>
  )
}

export default ShowCase
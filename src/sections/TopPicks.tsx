import React from 'react'
import PamelaImg from '../assets/images/pamela-top-pick.svg';
import ConsciosImg from '../assets/images/conscios.svg';
import { NavLink } from 'react-router-dom';

const TopPicks: React.FC = () => {
  return (
    <section className="top-picks ">
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className='card'>
                        <img className='top-img' src={PamelaImg} alt="top-picks"/>
                        <div className="top-text">
                            <p className='top-text-title'>Pamela Reif's<br/> Top Picks</p>
                            <NavLink className="btn-theme" to={''}>
                                <span className="corner-left"></span>
                            SHOP NOW
                                <span className="corner-right"></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className='card'>
                        <img className='let-img' src={ConsciosImg} alt="top-picks"/>
                        <div className="let-text">
                            <p className='let-text-title'>Let's Be <br/> Conscious</p>
                            <div className='let-btn-theme'>
                                <NavLink className="btn-theme" to={''}>
                                    <span className="corner-left"></span>
                                SHOP NOW
                                    <span className="corner-right"></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPicks
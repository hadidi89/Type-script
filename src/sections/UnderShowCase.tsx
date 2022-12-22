import React from 'react'
import NewArrivals from '../assets/images/New-Arrivals.svg';
import WinterClearance from '../assets/images/Winter-Clearance.svg';
const UnderShowCase: React.FC = () => {
  return (

    <section className='undershowcase'>
        <div className='container'>
            <div className='clearance'>
                <img className='winter-img' src={WinterClearance} alt="showcase"/>
                <div className='winter-title'>
                    <h1 className='Winter-title-1'>Winter Clearance</h1>
                    <h1 className='Winter-title-2'>Up to 70% Off!</h1>
                </div>
                <div className='winter-text'>
                    <p className='Winter-p1'>Sed ut perspiciatis unde omnis iste natus error sit </p>
                    <p className='Winter-p2'>voluptatem accusantium doloremque laudantium, </p>
                    <p className='Winter-p3'>totam rem apriam eaque ipsa quae ab illo inventore.</p>
                </div>
                <div className='dark-button-left'>
                    <button type='button' className='btn-dark-left'> SHOP NOW</button>
                </div>
            </div>    
            <div className='new-arrivals'>        
                <img className='new-img' src={NewArrivals} alt="showcase"/>
                <div className='arrivals-title'>
                    <h1 className='arrivals-title-1'>New</h1>
                    <h1 className='arrivals-title-2'>Arrivals</h1>
                </div>
                <div className='dark-button-right'>
                    <button type='button' className='btn-dark-right'> SHOP NOW</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default UnderShowCase
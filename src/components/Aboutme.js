import React from 'react'
import './Aboutme.css'
import profo from './profile.png'
function Aboutme() {
  return (
    <>
        <div className='container'>
          <h1>About me</h1>
          <div className='cont1'>
            <img className="imgg"src= {profo} alt='profile'/>
            <div className='bodyy'>
              <h2>I'm Keshav Verma</h2>
              <h6>Passionate Web Developer | Coding Enthusiast</h6>
              <p>Blessed With An Inquisitive Mind And A Determined Attitude, I Take Challenges Head-On And Never Settle Till I Get The Job Done! An Efficient Team Member And An Able Leader. I'm Currently In My Pre Final Year Pursuing Bachelor In Technology, Information Technology.</p>
              <div className='temp1'>
                <div className='temp11'>Age:21</div>
                <div className='temp12'>Email:keshavverma532@gmail.com</div>
              </div>
              <div className='temp2'>
                <div className='temp21'>College:Loveley Professional University</div>
                <div className='temp22'>Place: Sangrur, India-148024</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Aboutme
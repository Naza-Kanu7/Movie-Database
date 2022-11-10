import React from 'react'
import './components.css'
import Picture from './new.jpg'

function AboutMe() {
  return (
    <div className='about-container'>
        <h2>About The Developer</h2>
        <div className='about-me-container'>
            <div className='aboutme-img-container'>
                <img src={Picture} />
            </div>
            <div className='aboutme-text-container'>
                <p>Kanu Chinaza is a Frontend Web Developer. Her tech journey started in January, 2022. She is currently skilled in HTML, CSS, Vanilla Javascript, PHP and just completed learning in ReactJS using this Movie Database as Solo Learning Project. Hopefully, this WebApp serves you well! </p>
                <br />
                <span>Phone No./Whatsapp: 07046013444</span>
                <br />
                <br />
                <span>Email: kanuchinaza70@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
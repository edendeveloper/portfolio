import React from 'react'
import './footer.css'

import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

export default function Footer() {
    return(
        <footer className="contact">
            <a href="https://twitter.com/EdenLothus" target="blank"><img src={twitter} alt="Twitter"/></a>
            <a href="https://www.linkedin.com/in/welington-manfrim-a16a40194/" target="blank"><img src={linkedin} alt="Linkedin"/></a>
            <a href="https://github.com/edendeveloper" target="blank"><img src={github} alt="Github"/></a>
        </footer>
    )
}
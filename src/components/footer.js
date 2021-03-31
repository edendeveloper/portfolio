import React from 'react'
import './footer.css'

import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import twitch from '../assets/twitch.svg'
import instagram from '../assets/instagram.svg'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="buttons">
                <a href="https://twitter.com/EdenLothus" target="blank"><img src={twitter} alt="Twitter"/></a>
                <a href="https://www.linkedin.com/in/welington-manfrim-a16a40194/" target="blank"><img src={linkedin} alt="Linkedin"/></a>
                <a href="https://github.com/edendeveloper" target="blank"><img src={github} alt="Github"/></a>
                <a href="https://www.twitch.tv/edenlothus" target="blank"><img src={twitch} alt="Twitch"/></a>
                <a href="https://www.instagram.com/edenlothus/" target="blank"><img src={instagram} alt="Instagram"/></a>
            </div>
        </footer>
    )
}
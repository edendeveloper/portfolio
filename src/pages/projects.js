import React from 'react'
import './projects.css'
import './content.css'

import Header from '../components/header'
import Footer from '../components/footer'

import rpgtooler from '../assets/rpglogo.png'
import mercadao from '../assets/mercadao.jpg'
import tindev from '../assets/tindev.png'

export default function Projects() {
    const projects = [{
        name: 'RPGTooler',
        desc: 'TCC realizado no curso técnico, uma ferramenta de geração de fichas de rpg',
        img: rpgtooler,
        link: 'https://github.com/edendeveloper/tcc-rpgtooler',
    }, {
        name: 'Projeto Mercadão',
        desc: 'Projeto realizado no curso técnico, um site para o mercado municipal de Americana-SP',
        img: mercadao,
        link: 'https://github.com/edendeveloper/mercadao',
    }, {
        name: 'Tindev',
        desc: 'Aplicação feita na omnistack 8.0, promovida pela rocketseat',
        img: tindev,
        link: 'https://github.com/edendeveloper/tindev',
    }
    ]

    return(
        <div className="projects-container">
            <Header/>
            <div className="content">
                <ul id="projects">
                    {projects.map(index => (
                        <li>
                            <img src={index.img} alt="imagem do projeto"/>
                            <footer>
                                <a href={index.link} target="blank"><p>{index.name}</p></a>
                                <p>{index.desc}</p>
                            </footer>
                        </li>
                    ))}  
                </ul>
                </div>
            <Footer/>
        </div>
    )
}
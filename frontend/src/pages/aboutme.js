import React from 'react'
import './aboutme.css'

import Header from '../components/header'

import minecraft from '../assets/minecraft.gif'

export default function AboutMe() {
    return(
        <div className="main-container">
            <Header/>
            <h1>COMO TUDO COMEÇOU</h1>
            <section className="history">
                <div className="text-box">
                    <p>
                        No ano de 2018 eu jogava Minecraft com alguns amigos, um deles era programador. Certo dia um dos mods que nós usavamos no servidor precisava de uma alteração, os mods do jogo eram todos feitos em java, linguagem que esse amigo dominava, então ele me ensinou a alterar os arquivos do mod. Esse foi o pontapé para começar a aprender programação, foi quando eu vi a carreira que iria seguir.<br></br><br/>
                        A partir dali, ingressei num curso técnico de Desenvolvimento de Sistemas, descobri coisas novas e achei uma área que gostaria de me especializar: Front-end.
                    </p>
                </div>
                <img src={minecraft} alt="Minecraft gif"/>
            </section>
        </div>
    )
}
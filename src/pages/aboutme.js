import React from 'react'
import './aboutme.css'

import Header from '../components/header'
import Footer from '../components/footer'

import minecraft from '../assets/minecraft.gif'
import frontend from '../assets/frontend.svg'

export default function AboutMe() {
    return(
        <div className="main-container">
            <Header/>
            <h1>COMO TUDO COMEÇOU</h1>
            <section className="frontend">
                <p>
                    No ano de 2018 eu jogava Minecraft com alguns amigos, um deles era programador. Certo dia um dos mods que nós usavamos no servidor precisava de uma alteração, os mods do jogo eram todos feitos em java, linguagem que esse amigo dominava, então ele me ensinou a alterar os arquivos do mod. Esse foi o pontapé para começar a aprender programação, foi quando eu vi a carreira que iria seguir.<br></br><br/>
                    A partir dali, ingressei num curso técnico de Desenvolvimento de Sistemas, descobri coisas novas e achei uma área que gostaria de me especializar: Front-end.
                </p>
                <img src={minecraft} alt="Minecraft gif"/>
            </section>
            <h1>PORQUE FRONTEND?</h1>
            <section className="frontend">
                <img src={frontend} alt="frontend"/>
                <p>Criar layouts e artes para aplicações sempre foi uma parte que eu gostava muito enquanto desenvolvia projetos acadêmicos, então encontrei tecnologias que me possibilitariam ser um profissional de verdade nessa área.</p>
            </section>
            <Footer/>
        </div>
    )
}
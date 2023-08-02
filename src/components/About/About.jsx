import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about-container'>

      <div className="banner-container">
      <h3 className='saludo'>Hey there <img className='about-img' src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"/></h3>
        <img src="https://raw.githubusercontent.com/Remojs/Remojs/master/BANNER-GH.png" alt="remojs" className="banner" />
      </div>

      <div className="aboutme-container">
          <h2 className='titles'>About Me</h2>
            <p className='about-text'>
              Me considero una persona responsable y ordenada. Me gusta trabajar en proyectos desafiantes que me hagan aprender
              constantemente. Me siento especialmente cómodo desarrollando en el stack MERN, pero puedo adaptarme a lo que el proyecto
              proyecto necesite. Debido a mi capacidad de trabajo en equipo y creatividad, disfruto programando junto a otras personas y utilizando los
              diferentes puntos de vista para llegar a un resultado conjunto. Ver mis proyectos <strong><a href='https://github.com/Remojs?tab=repositories' className='link'>HERE</a></strong>.
            </p>
      </div>

      <div className="tecnologias-container">
        <h2 className='titles'>Tecnologias</h2>
          <div className="tecnologias"> 
            <img src="https://img.shields.io/badge/React-999999?style=for-the-badge&logo=react&logoColor=white&labelColor=101010" alt="React"/>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010" alt="JavaScript"/>
            <img src="https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010" alt="Node.JS"/>
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js"/>
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010" alt="MongoDB"/>
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=101010" alt="MySQL"/>
            <img src="https://img.shields.io/badge/Git-FA7343?style=for-the-badge&logo=git&logoColor=white&labelColor=101010" alt="Git"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010" alt="HTML5"/>
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=101010" alt="CSS3"/>
            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white&labelColor=101010" alt="Bootstrap"/>
          </div>
      </div>

      <div className="social-container">
        <h2 className='titles'>Contact Me</h2>
          <div className="social">
            <a href="https://www.linkedin.com/in/thiago-zambonini" target="_blank">
              <img className='about-img' src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/Remojs" target="_blank">
              <img className='about-img' src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=101010" alt="GitHub"/>
            </a>
          </div>
      </div>

    </div>
  )
}

export default About
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.png';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Potr-Pots'
              description='Implementation of a landing page according to Figma design - Using BEM and SCSS
              The design 1440px
              
              Desktop 1280px
              
              Tablet 640px
              
              Mobile (> 320px)'
              ghLink='https://github.com/metinbicaksiz/Potr_Pots'
              demoLink='https://metinbicaksiz.github.io/Potr_Pots/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Layout Dia'
              description='This is another landing page created using HTML, CSS and Javascript. For the CSS library, I have benefitted the Bulma.
              It works in the following creen sizes: Large screens 2560px
              The design 1600px
              Desktop 1280px
              Small desktop 1024px
              Tablet 640px
              Mobile (> 320px)'
              ghLink='https://github.com/metinbicaksiz/layout_dia'
              demoLink='https://metinbicaksiz.github.io/layout_dia/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='2048 JS Game'
              description='Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage'
              ghLink='https://github.com/metinbicaksiz/js_2048_game'
              demoLink='https://metinbicaksiz.github.io/js_2048_game/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Netflix Clone'
              description='This app is a clone of Netflix. It used TMDB API as the movie database since netfliz does not share their APPIs. In the recommendations page, the is a search bar which offers the input area, choice of AI (choose the AI to get recomendations) and the number of recomendaitons. once the search is clicked, it will look for movies in TMDB API and show the requested number of results and all the matching movies.'
              ghLink='https://github.com/metinbicaksiz/netflix-gpt'
              demoLink='http://metin.bicaksiz.com/netflix/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='C Library - Libft'
              description='linft project files for 42 Cursus This is the first project of 42 Cursus about creating my first C library.'
              ghLink='https://github.com/metinbicaksiz/libft'
            />
          </Col>
              <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='Imaginer'
              description="AI supported image generation NEXT.JS app. This app uses replicate.com website for image generation support."
              ghLink='https://github.com/metinbicaksiz/imaginer'
              demoLink="https://imaginer.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

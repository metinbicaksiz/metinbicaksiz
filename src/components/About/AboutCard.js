import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Metin BICAKSIZ </span>
            from <span className='purple'> Istanbul, Turkiye.</span>
            <br /> I have completed my masters in Computer Engineering program  at Istanbul Kultur University
            , wrote my thesis about
            interservice authentication and authorization mechanisms in
            microservice architecture.
            <br />
            Additionally, I am currently a self-employed software developer.
            <br />
            <br />
            Besides coding, some other activities that I love doing!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Learning
            </li>
            <li className='about-activity'>
              <ImPointRight /> Having time out with friends and family
            </li>
            <li className='about-activity'>
              <ImPointRight /> and of course, time with my daughter
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Both Evil and Angel are inside us!" <br /> "We choose which one to
            let out!"
          </p>
          <footer className='blockquote-footer'>Metin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

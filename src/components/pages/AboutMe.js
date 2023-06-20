import React from 'react';
import { Image } from 'react-bootstrap';
import selfPhoto from '../../images/IMG_1909.png'

export default function About() {
  return (
    <div>
      <h1>A Little About Me...</h1>
      <div className='AboutMe'>
        <Image src={selfPhoto} width={350} height={234.06}/>
        <p>
          I am a Computational Media Major alumni from the Georgia Institute of Technology. 
          I graduated in December 2021 and am passionate about using the skills I've developed in 
          programming and problem solving to make a positive impact within the Software Development 
          industries. I fell in love with software as soon as I saw the various different applications 
          of it and the way it was being used to solve problems i.e. GPS being used to guide us to our 
          destination and Social Media bringing us together, and would love to provide my two cents to 
          such a fascinating and growing industry. I am also currently enrolled in Georgia Tech's 
          Full Stack Flex Coding Bootcamp where I am honing and developing my skills in Web Development.
        </p>
      </div>
    </div>
  );
}

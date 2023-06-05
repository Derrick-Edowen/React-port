import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{fontSize:16, color:'white', fontFamily: 'Coolvetica'}}>
          Hello! My name is Derrick Edowen, and I am a passionate web developer with a strong interest in creating innovative and user-friendly web solutions. I am constantly amazed by the power of technology to transform the way we interact with the digital world, and I am excited to be a part of this dynamic field.

Ever since I discovered my love for coding, I have been on a journey to expand my knowledge and skills in web development. I am a detail-oriented individual who thrives on solving complex problems and turning ideas into functional and visually appealing websites. The process of bringing a concept to life through coding and seeing it come alive on the screen brings me immense joy and satisfaction.

I have a solid foundation in front-end development, with expertise in HTML, CSS, and JavaScript. I enjoy crafting seamless user experiences through responsive designs and intuitive interfaces. I believe that a well-designed website not only looks visually appealing but also prioritizes usability and accessibility for all users.

In addition to front-end development, I have a strong understanding of back-end technologies and frameworks like Node.js and Express.js. I have experience working with databases, and RESTful APIs. I am continuously exploring new technologies and keeping up with industry trends to enhance my skills and stay ahead in this rapidly evolving field.
</p>
<p style={{fontSize:16, color:'#ffd700', fontFamily: 'Coolvetica'}}>

Collaboration and teamwork are values that I hold dear. I believe that the best results are achieved when diverse perspectives come together to create something greater than the sum of its parts. I enjoy working in a collaborative environment, bouncing ideas off fellow developers, and learning from their expertise.

Throughout my journey as a web developer, I have had the opportunity to work on various projects. Each project has provided me with valuable lessons and a deeper understanding of the intricacies of web development. I have honed my ability to manage deadlines, communicate technical concepts effectively, and adapt to new technologies.

 I believe in the power of continuous learning and staying engaged with the developer community.

I am excited to leverage my skills and passion for web development to contribute to a dynamic team and make a positive impact. I am eager to tackle new challenges, embrace innovation, and create meaningful experiences for users. I am confident that my technical expertise, enthusiasm, and commitment to excellence would make me a valuable asset to any web development team.

Thank you for taking the time to learn a bit about me. I am excited about the possibilities ahead and look forward to the opportunity to contribute my skills and passion to your organization.

Let's build something great together!</p>
<p style={{fontSize:16, color:'white', fontFamily: 'Coolvetica'}}>

Sincerely,

Derrick Edowen</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

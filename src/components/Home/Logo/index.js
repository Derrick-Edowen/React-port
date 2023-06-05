import React, { useState, useEffect } from 'react';
import LogoS from '../../../assets/images/selfy-modified.png'
import './index.scss'

const Logo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='logo-container'>
    <div className={`fade-in-image ${isVisible ? 'visible' : ''}`}>
      <img src={LogoS} alt="Me" />
    </div>
    </div>
  );


  /*const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        //ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )*/
}

export default Logo

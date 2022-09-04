import{FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import React from 'react'
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {   name: "linkedin", icon1: <FaLinkedinIn /> },
  ];
const socialNetworks2= [
    {   name: "github", icon2: <FaGithub /> },
  ];
const socialNetworks3= [
    {   name: "instagram", icon3: <FaInstagram /> },
  ];

  
  const SocialNetworks = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href="https://www.linkedin.com/in/roberto-pereira-js/" target="_blank" className="social-btn" id={network.name} key={network.name}>
            {network.icon1}
          </a>
        ))}
        {socialNetworks2.map((network) => (
          <a href="https://github.com/Hobyn" className="social-btn"target="_blank" id={network.name} key={network.name}>
            {network.icon2}
          </a>
        ))}
        {socialNetworks3.map((network) => (
          <a href="https://www.instagram.com/beto_dev/" target="_blank"className="social-btn" id={network.name} key={network.name}>
            {network.icon3}
          </a>
        ))}
      </section>
    );
  };

export default SocialNetworks
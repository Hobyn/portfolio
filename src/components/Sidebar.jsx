import React, {component} from 'react'
import Avatar from '../img/eu-site.png'
import SocialNetworks from './SocialNetworks'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {



  return <aside id='sidebar'>
    <img src={Avatar} alt="Hobyn_Developer" />
    <p className='title'>Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="Roberto Curriculo.pdf"
    download="Roberto Curriculo.pdf">
      <button className='btn'>Download Curriculo</button>
    </a>

  </aside>
}

export default Sidebar


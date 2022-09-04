import React from 'react'
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer'
import ProjetosContainer from './ProjetosContainer.jsx'



const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjetosContainer/>
 
   


    </main>
  );
};


export default MainContent
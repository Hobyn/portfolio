import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";
import React from 'react'

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (<section id="information">
    <div className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
            <h3>Telefone</h3>
            <a href="https://wa.me/5581996697770?text=Oie%2C+vamos+trocar+uma+ideia%3F" target="_blank"> 
            <p>(81)99669-7770</p>
            </a>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id="email-icon"/>
        <div>
            <h3>Email</h3>
            <a href="mailto:roberto20171@gmail.com" target="_blank"> 
            <p>roberto20171@gmail.com</p>
            </a>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon"/>
        <div>
            <h3>Localização</h3>
            <p>Pernambuco / Paulista</p>
        </div>
    </div>

  </section>
  )
}

export default InformationContainer
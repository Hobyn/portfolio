import {
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
} from 'react-icons/di'

import {FaWordpress} from 'react-icons/fa'

import { TbBrandNextjs } from "react-icons/tb";

import { SiRedux, SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [

  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mongodb", name: "Mongodb", icon: <DiMongodb /> },
  { id: "react", name: "React.Js", icon: <DiReact /> },
  { id: "redux", name: "Redux.Js", icon: <SiRedux /> },
  { id: "next", name: "Next.Js", icon: <TbBrandNextjs /> },
  { id: "wordpress", name: "Wordpress", icon: <FaWordpress /> },


]

const TechnologiesContainer = () => {
  return (
  <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) =>(
        <div className="technologies-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technologies-info">
            <h3>{tech.name} </h3>
          </div>
        </div>
      ))}
    </div>

  </section>
  )
}

export default TechnologiesContainer
import {Link} from "react-router-dom"

import Info from "../../info.json"
import "./Header.css"

export default function Header() {
  return (
    <>
        <Link to="/">
            <div className="title">
                <h1 className="title-name">
                    {Info.name} 's <em>{Info.topic}</em>
                </h1>
            </div>
        </Link>
        <div className="nav">
            <Link to="/"><li> Home</li></Link>
            <li> | </li>        
            <Link to="/skills"><li> Skills</li></Link>
            <li> | </li>
            <Link to="/certifications"><li> Certifications</li></Link>
            <li> | </li>
            <Link to="/projects"><li> Projects</li></Link>
            <li> | </li>
            <Link to="/education"><li>Education</li></Link>
            <li> | </li>
            <Link to="/about"><li>About</li></Link>
            <li> | </li>
            <Link to="/contact"><li> Contact</li></Link>
        </div>
    </>
  )
}

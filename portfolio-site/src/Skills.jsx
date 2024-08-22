import "./Skills.css";
import laptop1 from "./assets/laptop1.png";
import tools from "./assets/tools.png";
import language from "./assets/language.png";

export default function Skills(){
    return(
        <>
            <div className="skills-heading" >
                <h2 style={{fontFamily:"Roboto",fontSize:"40px"}}>
                    My Skills
                </h2>
                <p style={{fontFamily:"Roboto",fontSize:"20px",color:"gray"}}>Experienced web developer with expertise in REACT JS, NODE JS, JavaScript, and responsive design. Proficient in building dynamic, user-friendly websites.</p>
            </div>
            <div className="skills-all" id="skills-all">
                
                <div className="skills-first">
                    <img src={laptop1} alt="laptop-icon" className="laptop-icon"/>
                    <h2 style={{fontFamily:"Roboto"}}>Web Developement</h2>
                    <ul className="skills-list">
                        <li className="skills-one">HTML & CSS</li>
                        <li className="skills-one">JAVASCRIPT</li>
                        <li className="skills-one">REACT JS</li>
                        <li className="skills-one">NODE & EXPRESS</li>
                        <li className="skills-one">MONGODB</li>
                        <li className="skills-one">BOOTSTRAP</li>
                        <li className="skills-one">MATERIAL UI</li>
                    </ul>

                </div>

                <div className="skills-tools">
                    <img src={tools} alt="tools" className="tools-icon" />
                    <h2 style={{fontFamily:"Roboto",marginLeft:"21px"}}>Tools</h2>
                    <ul className="tools-list">
                        <li className="skills-two">VS CODE</li>
                        <li className="skills-two">ADOBE PHOTOSHOP</li>
                        <li className="skills-two">FIGMA</li>
                        <li className="skills-two">GIT & GITHUB</li>
                        <li className="skills-two">LINUX</li>
                    </ul>
                </div>

                <div className="skills-languages">
                    <img src={language} alt="language-icon" className="language-icon" />
                    <h2 style={{fontFamily:"Roboto",marginLeft:"25px"}}>Languages</h2>
                    <ul className="languages-list">
                        <li className="skills-three">C++</li>
                        <li className="skills-three">PYTHON</li>
                        <li className="skills-three">JAVASCRIPT</li>
                        <li className="skills-three">JAVA</li>
                        <li className="skills-three">PHP</li>
                    </ul>
                </div>

            </div>
        </>
    )
}
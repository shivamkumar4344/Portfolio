import "./Navbar.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import logo from "./assets/logo-color.png";

export default function Navbar() {
    return (
        <>
            <div className="navbox">
                <div className="navbox-logo">
                    <img src={logo} alt="LOGO" className="logo"/>
                </div>
                <div className="navbox-content">
                    <h3 className="navbar-hover" onClick={()=>{
                        window.location.reload();
                    }}>Home</h3>
                    <h3 className="navbar-hover"><a href="#image-aboutme" style={{textDecoration:"none",color:"inherit",scrollBehavior:"smooth"}}>About Me</a></h3>
                    <h3 className="navbar-hover"><a href="#skills-all" style={{textDecoration:"none",color:"inherit",scrollBehavior:"smooth"}}>Skills</a></h3>
                    <h3 className="navbar-hover"><a href="#projects-heading" style={{textDecoration:"none",color:"inherit",scrollBehavior:"smooth"}}>Projects</a></h3>
                    <h3 className="navbar-hover"><a href="#contact-me" style={{textDecoration:"none",color:"inherit",scrollBehavior:"smooth"}}>Contact Me</a></h3>
                </div>
                <div className="email-navbox">
                    <EmailOutlinedIcon />
                    <p>ydvshivam10@gmail.com</p>
                </div>
            </div>
        </>
    )
}
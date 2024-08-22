import "./Footer.css";
import logo from "./assets/logo-color.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer(){
    return(
        <>
            <div className="footer-box">
                <div className="social-media-info">
                    <img src={logo} alt="not loading" className="logo"/>
                    <p style={{fontFamily:"Roboto",fontSize:"20px",color:"gray"}}>You can connect with me by just clicking on the social media icons by differnt social apps.</p>
                    <div className="social-media-apps">
                        <a href="https://www.instagram.com/shivamm_yadaav/" style={{color:"#833AB4",textDecoration:"none"}} target="blank"><InstagramIcon fontSize="large" className="hover-social" style={{color:"#833AB4",textDecoration:"none"}}/></a>

                        <a href="https://www.facebook.com/profile.php?id=100008719054812" target="blank"><FacebookIcon fontSize="large" className="hover-social" style={{color:"#316FF6",textDecoration:"none"}}/></a>

                       <a href="https://www.x.com" style={{textDecoration:"none",color:"inherit"}} target="blank"> <XIcon fontSize="large" className="hover-social"/></a>
                        
                        <a href="https://www.linkedin.com/in/shivamkumar10/" style={{color:"#0077B5",textDecoration:"none"}} target="blank"><LinkedInIcon fontSize="large" className="hover-social"/> </a>

                        <a href="https://github.com/shivamkumar4344" style={{fontSize:"large",color:"inherit",textDecoration:"none"}} target="blank" ><GitHubIcon fontSize="large" className="hover-social"/></a>
                    </div>
                </div>
                <div className="pages">
                <h6 style={{fontSize:"25px",fontFamily:"Roboto"}}>Main Pages</h6>
                <ul style={{listStyle:"none",lineHeight:'50px',color:"gray",fontSize:"20px"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Portfolio</li>
                    <li>Project</li>
                </ul>
                </div>

                <div className="utility-pages">
                <h6 style={{fontSize:"25px",fontFamily:"Roboto"}}>Utility Pages</h6>
                <ul style={{listStyle:"none",lineHeight:'50px',color:"gray",fontSize:"20px"}}>
                    <li>Startguide</li>
                    <li>StartHere</li>
                    <li>404 Not Found</li>
                    <li>Password Protected</li>
                    <li>Licenses</li>
                    <li>Chanelog</li>
                </ul>
                </div>

                <div className="contact-footer">
                    <h6 style={{fontSize:"25px",fontFamily:"Roboto"}}>Contact Me</h6>
                    <div className="email-name">
                    <EmailOutlinedIcon fontSize="large"/><p>ydvshivam10@gmail.com</p>
                    </div>
                    <div className="phone-no">
                        <PhoneOutlinedIcon fontSize="large"/><p style={{fontSize:"large"}}>91+ 9386840524</p>
                    </div>
                    <div className="address">
                        <HomeOutlinedIcon fontSize="large"/><p style={{fontSize:"large"}}>Khagaul,Patna, Bihar</p>
                    </div>
                    <div className="github">
                        <GitHubIcon fontSize="large"/><a href="https://github.com/shivamkumar4344" style={{fontSize:"large",color:"inherit",textDecoration:"none"}} target="blank">shivamkumar4344</a>
                    </div>
                </div>
            </div>
            <hr style={{width:"1300px"}}/>
            <div className="below-footer">
                <p style={{fontSize:"20px"}}>Copyright &copy;Shivam Yadav | Designed by <u style={{color:"black"}}>Shivam Yadav</u> | Year: 2024</p>
            </div>
        </>
    )

}
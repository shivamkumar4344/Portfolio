import DP2 from "./assets/DP2.jpg";
import Button from '@mui/material/Button';

export default function AboutMe(){
    return(
        <>
        <div className="image-aboutme" id="image-aboutme" style={{display:"flex",justifyContent:"space-around"}}>
            <img src={DP2} alt="about profile pic" style={{height:"622px",width:"589px",borderRadius:"20px",marginLeft:"157px",marginTop:"50px"}}/>
            <div className="aboutme" style={{marginTop:"250px",marginLeft:"70px",width:"600px"}}>
                <h3 style={{fontFamily:"Roboto",fontSize:"45px"}}>About Me</h3>
                <h3 style={{fontFamily:"Roboto",fontSize:"20px",color:"grey"}}>Hello My name is Shivam Yadav and I am aspiring full stack web developer. I am much into the world of computer science.. I like to design website and also like the server part of the website.
                Come with me to dive into the world of Web developement. </h3>

                <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '45px', height: "70px", width: "170px",fontSize:"14px" }}>
                <a href="https://www.linkedin.com/in/shivamkumar10/" style={{color:"inherit",textDecoration:"none"}} target="blank">Get in Touch</a></Button>
                
            </div>

        </div>
        </>
    )
}
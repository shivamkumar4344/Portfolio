import "./Description.css";
import DP from "./assets/profileDP.png";
import Button from '@mui/material/Button';
import React from "react";
import Typewriter from "typewriter-effect";




export default function Description() {
    return (
        <>

            <div className="name">
                <h4>
                    <Typewriter
                        options={{
                            strings: "Hey I am Shivam Yadav",
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>
            </div>
            <div className="desc-outer">
                <div className="desc">
                    <h1>
                        I am a Full Stack <br />Web-Developer and I enjoy desigining websites.<br />
                    </h1>
                    <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '45px', height: "60px", width: "150px", fontSize: "small" }}>
                        <a href="https://www.linkedin.com/in/shivamkumar10/" style={{ color: "inherit", textDecoration: "none" }} target="blank">Get in Touch</a> </Button>
                </div>
                <div className="outer-profile-pic">
                    <img src={DP} alt="Profile-pic" className="profile-img" />
                </div>
            </div>
        </>
    )
}
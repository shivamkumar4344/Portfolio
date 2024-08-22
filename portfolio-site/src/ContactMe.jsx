import "./ContactMe.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Footer from "./Footer";

export default function ContactMe(){
    let [formData, setFormData] = useState({
        fullName: "",
        email:"",
        phone:"",
        subject: "",
        message:"",
    });

    let handleInputChange = (event) => {
        setFormData((curr) => {
            return { ...curr, [event.target.name]: event.target.value };
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            email:"",
            phone:"",
            subject: "",
            message:""
        })
    };

    return (
        <>
        <h4 style={{fontSize:"40px",fontFamily:"Roboto",textAlign:"center"}} id="contact-me">Contact Me</h4>
        <p style={{textAlign:"center",fontFamily:"Roboto", fontSize:"20px",color:"gray"}}>Join me now for the amazing experiences in the field of Web-developement</p>
        <div className="form-outer">
        <form>
            <label htmlFor="fullName" className="common-label-class">Full Name</label> <br /> <br />
            <input type="text" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" className="common-input-class" required/> <br />

            <br /><br />
            <label htmlFor="email" className="common-label-class">Email Address</label> <br /> <br />
            <input type="email" placeholder="yourname@gmail.com" value={formData.email} onChange={handleInputChange} id="email" name="email" className="common-input-class" required/> <br />
            <br /><br />
            
            <label htmlFor="phone" className="common-label-class">Phone</label> <br /> <br />
            <input type="text" placeholder="+91 8279202025" value={formData.phone} onChange={handleInputChange} id="phone" name="phone" className="common-input-class" required/> <br />
            <br /><br />

            <label htmlFor="subject" className="common-label-class">Subject</label> <br /> <br />
            <input type="text" placeholder="Eg. Project Proposal" value={formData.subject} onChange={handleInputChange} id="subject" name="subject" className="common-input-class" required/> <br /> <br /> <br />

            <label htmlFor="message" className="common-label-class">Message</label> <br /> <br />
            <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} placeholder="Write your messsage...." className="message" ></textarea>
            <br /><br />
            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '45px', height: "60px", width: "180px", fontSize:"medium" }} onClick={handleSubmit}>Send Message {' '} <SendIcon fontSize="small"/></Button>
        </form>
        </div>

        <Footer/>
        </>
    )
}
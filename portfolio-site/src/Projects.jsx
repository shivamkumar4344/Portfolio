import "./Projects.css";
import news_icon from "./assets/news-icon.png";
import chat_icon from "./assets/chat-icon.png";
import property_icon from "./assets/property-icon.png";
import fitness_icon from "./assets/fitness-icon.png";


export default function Projects(){
    return(
        <>
            <div className="projects-heading" id="projects-heading">
                <h1 style={{fontFamily:"Roboto",fontSize:"40px"}}>
                    My Projects
                </h1>
                <p style={{fontFamily:"Roboto",fontSize:"20px",color:"gray"}}>
                My projects collection showcases diverse work, including web development, data analysis, and automation scripts. Each project highlights different skills, from coding and problem-solving to design and user experience, reflecting my growth and expertise across various technologies and programming languages.</p>
            </div>

            <div className="project-row1">
                <div className="project-one-one">
                <div className="project-one">
                    <img src={news_icon} alt="news-icon" className="news-icon" />
                    <h3 style={{fontFamily:"Roboto",fontSize:"30px"}}>NEWS WEBSITE</h3>
                </div>
                <div className="project-one-desc">
                    <p style={{fontFamily:"Roboto",fontSize:"18px",color:"gray"}}> Created with HTML, CSS & JAVASCRIPT. This responsive website is designed for giving news all across the world. This Website is is searching news from a news api and givig it back to the user.<br />
                    GitHub Link:- <a href="https://github.com/shivamkumar4344/DailyBlog-News-Website" target="blank">Click Here to visit my GitHub Repo</a></p>
                </div>
                </div>
                <div className="project-two-two">
                <div className="project-two">
                    <img src={chat_icon} alt="chat_icon" className="chat-icon" />
                    <h3 style={{fontFamily:"Roboto",fontSize:"30px"}}>CHAT APP(VIBEHUB) </h3>
                </div>
                <div className="project-two-desc">
                    <p style={{fontFamily:"Roboto",fontSize:"18px",color:"gray"}}> Created with MERN stack which includes real time online chat with your friends with the help of Socket.io and it also includes authentication system by the help of jwt tokens.It also includes a database that stores all the user's info and chats. <br />
                    GitHub Link:- <a href="https://github.com/shivamkumar4344/ChatAPP" target="blank">Click Here to visit my GitHub Repo</a></p>
                </div>
                </div>

            </div>


            <div className="project-row1">
                <div className="project-one-one">
                <div className="project-one">
                    <img src={property_icon} alt="news-icon" className="property-icon" />
                    <h3 style={{fontFamily:"Roboto",fontSize:"30px"}}>PROPERTY WEBSITE</h3>
                </div>
                <div className="project-one-desc">
                    <p style={{fontFamily:"Roboto",fontSize:"18px",color:"gray"}}> Created with HTML, CSS & JAVASCRIPT. This responsive website is designed for selling and buying properties. It provides us a user-friendly platform for property dealing. <br />
                    GitHub Link:- <a href="https://github.com/shivamkumar4344/data-piarets2_KOC27_CipherSchools" target="blank">Click Here to visit my GitHub Repo</a></p>
                </div>
                </div>
                <div className="project-two-two">
                <div className="project-two">
                    <img src={fitness_icon} alt="news-icon" className="fitness-icon" />
                    <h3 style={{fontFamily:"Roboto",fontSize:"30px"}}>FITNESS CALCULATOR</h3>
                </div>
                <div className="project-two-desc">
                    <p style={{fontFamily:"Roboto",fontSize:"18px",color:"gray"}}>A fitness calculator implemented in C language can compute essential metrics such as Body Mass Index (BMI),V02, and target heart rate zones. By inputting variables like weight, height, age, gender, the calculator helps users monitor and optimize their fitness and health goals. <br />GitHub Link:- <a href="https://github.com/shivamkumar4344/FitnessCalculator" target="blank">Click Here to visit my GitHub Repo</a></p>
                </div>
                </div>

            </div>
        </>
    )
}
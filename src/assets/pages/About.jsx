
import '../css/about.css'; 
import anik_img2 from '../images/anik_passport.png';
export default function About(){


    return  (
    <div className="about-container">
    <h1>About Anik</h1>
    <img src={anik_img2} alt="self" style={{ width: '20%', height: '20' }}/>
    <p>
      Welcome to my website! I am a passionate developers
       who can develop web applications to solve real-world problems.
        my mission is to provide useful and user-friendly solutions to help people.
    </p>
    <p>
     I am dedicated to constant learning and innovation. I focus on building modern, responsive, and scalable applications that meet the needs of my clients.
    </p>
    <p>
     I can develop web application using php, Laravel, CodeIgniter4, strust2.I worked on mysql and Oracle Database.In frontend, I can create pages 
     pages using html, css, javascript.  <br /> 
     
     Now I am developing myself to become a react, typescript developer.
    </p>
    <h2>my Values</h2>
    <ul>
      <li>Innovation</li>
      <li>Integrity</li>
      <li>Collaboration</li>
      <li>Excellence</li>
    </ul>
  </div>
  );
};
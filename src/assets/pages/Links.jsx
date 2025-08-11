import React from 'react';
import '../css/links.css'; 
import { FaLinkedin, FaGithub,FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'
import Intro from '../component/Intro';
export default function Links(){

    return (
      <div className='link-container'>
      <h1>My Profile Link Pages</h1>
      <h2>Here are some of my important links:</h2>
      
      <ul>
       <li>
          <a href="https://www.linkedin.com/in/anikkumardas15" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  color="#0077b5" />  LinkedIn 
          </a>
        </li>
        <li>
          <a href="https://github.com/AnikKumarDas07" target="_blank" rel="noopener noreferrer">
           <FaGithub  color="#333" /> GitHub
          </a>
        </li>
         <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle  color="#DB4437" />  Google
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook  color="#1877F2" />  Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter  color="#1DA1F2" /> Twitter
          </a>
        </li>
        <li>
          <a href="/about" target="_self">
             About Anik
          </a>
        </li>
      </ul>
      <Intro/>
    </div>
      );
}




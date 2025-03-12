import React from 'react';
import Container from 'react-bootstrap/Container';
import Contact from "./Contact";
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import '../css/Contact.css'; 
export default function Address ()  {
    return (
        <>
         
   <Contact /> <br /> <br /> <br />
   
   <div className="container">
      <div className="column"> <p style={{ fontSize: '20px' }}><FaMobileAlt style={{ color: 'green', fontSize: '30px' }}/> 01720580426 </p></div>
      <div className="column"> <p style={{ fontSize: '20px' }}><MdEmail style={{ color: 'red', fontSize: '30px' }}/> anik@ictcell.buet.ac.bd</p></div>
      <div className="column"><p style={{ fontSize: '20px' }}><IoLogoWhatsapp style={{ color: 'green', fontSize: '30px' }}/> 01720580426</p></div>
    </div>  

   
  </>
    );
};


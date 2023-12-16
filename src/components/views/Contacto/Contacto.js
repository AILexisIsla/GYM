import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../Contacto/Contacto.css";
import { Link } from "react-router-dom";
import wbanner from "../../../assets/w-banner.png";
import Swal from "sweetalert2";


const Contact = () => {
 
useEffect(()=>{
  mostrarAlerta();
},[]);

const mostrarAlerta=()=>{
  Swal.fire(
    'Good job!',
  'Mensaje enviado!',
  'success'
  )
}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8244bk",
        "template_ycv3d6h",
        form.current,
        "H7P-XM_YI7W6oaBqO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <html>
      <div className="center">
      <div className="container">
      <Link to='/'><button>volver</button></Link>
      <img src={wbanner} alt="" className="w-banner" />
</div>
        
        <form ref={form} onSubmit={sendEmail} onClick={mostrarAlerta}>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      </html>
  );
};

export default Contact;

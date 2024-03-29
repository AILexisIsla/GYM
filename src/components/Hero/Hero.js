import React from "react";
import "./Hero.css";
import Header from "../Header/Header.js";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Weatherapi from "../Weather/Weather.js";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Hero = ({ loading, SetLoading }) => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const navigate = useNavigate();

  const logOut = () => {
    Swal.fire({
      title: "¿Estás seguro de",
      text: "que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "swal-custom-style",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Su sesion se cerro correctamente.",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "swal-custom-style",
          },
        });
        localStorage.removeItem("user-token");
        SetLoading({});
        navigate("/");
      }
    });
  };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="thebestadd">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>El mejor Gym en la ciudad</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Activa </span>
            <span>tu</span>
          </div>
          <div>
            <span>cuerpo</span>
          </div>
          <div className="">
            <span>
              Aquí te ayudaremos a moldear y construir tu cuerpo ideal y a vivir
              tu vida al máximo.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Couchs expertos</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Miembros</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>Programas fitness</span>
          </div>
        </div>
        <div className="hero-buttons">
          <Link to="/Login" className="btn">
            Comienza
          </Link>
          <Link to="*" className="btn">
            Aprende más
          </Link>
        </div>
      </div>
      <div className="right-h">
        {loading?.token ? (
          <>
            <Button className="btn" onClick={logOut}>
              Cerrar Sesion
            </Button>
            <Link to="/Admin" className="btn">
              <span className="x1">Bienvenido </span>
              {loading?.NameUser}{" "}
            </Link>
          </>
        ) : (
          <Link to="/Login" className="btn">
            Unete ahora
          </Link>
        )}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Cardio</span>
          <span>116 bpn</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28.4rem" }}
          transition={transition}
          className="clima"
        >
          <img src={Calories} alt="" />
          <div>
            <Weatherapi />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

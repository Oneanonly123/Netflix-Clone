import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const navigation = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigation("/")}
          className="nav__logo"
          src="https://imgs.search.brave.com/qeRQHIxunOhuU1Vv66mceQ-Abo5mLixUDoVOXv4qylw/rs:fit:1200:677:1/g:ce/aHR0cHM6Ly9kYXZp/ZGJsYWluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDQvbmV0ZmxpeC1s/b2dvLnBuZw"
          alt=""
        />
        <img
          onClick={() => navigation("/profile")}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/366be133850498.56ba69ac36858.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

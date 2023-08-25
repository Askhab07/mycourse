import React from "react";
import notification from "../../assets/icon/notification.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">MyCourse</div>
        <div className="catalog">
          <div className="icon-menu">
            <svg
              width="50"
              height="40"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5H45"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M5 20H45"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M5 35H45"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
          Курсы
        </div>
        <div className="header__rigth">
          <Link to={"/profile"}>
            <div className="my__training">
              <button>Мое обучение</button>
            </div>
          </Link>
          <div className="notification">
            <img className="notification-img" src={notification} alt="" />
          </div>
          <div className="profile">AA</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

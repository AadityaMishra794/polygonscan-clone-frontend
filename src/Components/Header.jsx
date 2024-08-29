import React from "react";
import Logo from "../Assets/Logo.png"; // Replace with actual logo
import "../Styles/Header.css";
import "../Styles/utility.css";

const Header = () => {
  return (
    <header>
    
      <nav>
        <ul id="head-ul" className="items-align">
        <div className="logo">
        <img id="headlogo" src={Logo} alt="PayMe Logo" />
      </div>
          <li className="navlists">
            <a className="navlinks" href="#">
              Home
            </a>
          </li>
          <li className="navlists blockchain-nav">
            <a className="navlinks" href="#">
              Blockchain
            </a>
            <ul id="blc-ul">
              <li className="blc-sub-links">
                <a href="#">Transactions</a>
              </li>
              <li className="blc-sub-links">
                <a href="#">Pending Transactions</a>
              </li>
              <li className="blc-sub-links">
                <a href="#">Blocks</a>
              </li>
              <li className="blc-sub-links">
                <a href="#">Account</a>
              </li>
            </ul>
          </li>
          <li className="navlists">
            <a className="navlinks" href="#">
              Resources
            </a>
          </li>
          <li className="navlists">
            <a className="navlinks" href="#">
              Stats
            </a>
          </li>
          <input id="search-bar" type="text" placeholder="search /blocks/txn" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
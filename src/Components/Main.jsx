import React from "react";
import QR from '../Assets/qr.webp'
const Main = () => {
  return (
    <div>
      <div className="items-align" id="top-main">
        <h1 id="head-span"> Pay with safety using PayMe</h1><br />
        
      </div>
      <div className="items-align" id="mid-main"><h2 id="head2">Connect your wallet with our Payme App</h2><img id="Qr" src={QR} alt="Qr Code" /></div>
      
      
    </div>
  );
};

export default Main;

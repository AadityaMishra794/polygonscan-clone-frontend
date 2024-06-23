// components/FeaturesSection.js

import React from 'react';
import '../Styles/Feature.css';
const Feature = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Our Features</h2>
        <div className="feature">
          <h3>Transaction History</h3>
          <p>Explore detailed transaction records.</p>
        </div>
        <div className="feature">
          <h3>Block Explorer</h3>
          <p>View blocks and their details.</p>
        </div>
        <div className="feature">
          <h3>Token Analysis</h3>
          <p>Analyze token transfers and holdings.</p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
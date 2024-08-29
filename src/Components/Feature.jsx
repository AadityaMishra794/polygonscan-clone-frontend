import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Enhanced Security</h3>
          <p>
            Utilizing blockchain technology, PayME ensures maximum protection for all transactions and asset management, providing unparalleled security and transparency.
          </p>
        </div>
        <div className="feature-item">
          <h3>Cost Efficiency</h3>
          <p>
            By eliminating traditional intermediaries, PayME significantly reduces transaction costs, making financial services more affordable for users.
          </p>
        </div>
        <div className="feature-item">
          <h3>Comprehensive Solutions</h3>
          <p>
            From peer-to-peer lending to supply chain management, PayME offers a wide range of decentralized financial services, catering to diverse financial needs efficiently and seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;

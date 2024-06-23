// src/components/Transaction.js
import React from 'react';

const Transaction = ({ transaction }) => {
  return (
    <div className="transaction">
      <div className="transaction-id">{transaction.id}</div>
      <div className="transaction-info">
        From <a href="Transaction.jsx">{transaction.from}</a> To <a href="#">{transaction.to}</a>
      </div>
      <div className="transaction-amount">{transaction.amount} MATIC</div>
    </div>
  );
};

export default Transaction;

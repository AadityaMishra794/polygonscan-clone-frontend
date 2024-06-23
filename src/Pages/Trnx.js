// components/Transactions.js

import React from "react";
import "../Pages/trnx.css";

const Trnx = () => {
  const transactions = [
    {
      hash: "0x123...",
      block: 123456,
      age: "1 min ago",
      from: "0xabc...",
      to: "0xdef...",
      value: "0.5 ETH",
      fee: "0.01 ETH",
    },
    // Add more transactions as needed
  ];

  return (
    <div className="transactions-container">
      <h1>Transactions</h1>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Txn Hash</th>
            <th>Block</th>
            <th>Age</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>[Txn Fee]</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.hash}</td>
              <td>{txn.block}</td>
              <td>{txn.age}</td>
              <td>{txn.from}</td>
              <td>{txn.to}</td>
              <td>{txn.value}</td>
              <td>{txn.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trnx;

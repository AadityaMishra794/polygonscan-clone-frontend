// src/components/Dashboard.js
import React from 'react';
import Block from './Block';
import Transaction from './Transaction';

const blocks = [
  { id: '58483438', validator: '0x127685D6...1681E5C9C', txnCount: 60, time: 2, reward: 0.2484 },
  { id: '58483437', validator: '0x127685D6...1681E5C9C', txnCount: 67, time: 2, reward: 0.24975 },
  { id: '58483436', validator: '0x127685D6...1681E5C9C', txnCount: 54, time: 2, reward: 0.33957 },
  { id: '58483435', validator: '0x127685D6...1681E5C9C', txnCount: 40, time: 2, reward: 0.13412 }
];

const transactions = [
  { id: '0x41835b3c6d...', from: '0xdf40D0F1...5DF04fef1', to: '0x65F98AA4...dE0451afe', amount: 0 },
  { id: '0x0dd62a2262...', from: '0x9D84eCA9...241ae48ea', to: '0x0f3284bF...0f729e0BC', amount: 0 },
  { id: '0xea1282cd18f...', from: '0x26D0a121...6Ce3a6dEd', to: '0x0f3284bF...0f729e0BC', amount: 0 },
  { id: '0x8c5e8f2997d...', from: '0x3062D4B5...8Bb74aC02', to: '0xA3f75166...56dD63D3A', amount: 0 }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="latest-blocks">
        <h2 id='block-head'>Latest Blocks</h2>
        {blocks.map(block => (
          <Block key={block.id} block={block} />
        ))}
      </div>
      <div className="latest-transactions">
        <h2 id='tnx-head'>Latest Transactions</h2>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

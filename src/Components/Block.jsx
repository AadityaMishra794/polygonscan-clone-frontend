// src/components/Block.js
import React from 'react';

const Block = ({ block }) => {
  return (
    <div className="block">
      <div className="block-id">{block.id}</div>
      <div className="block-info">
        <div>Validated By <a href="#">{block.validator}</a></div>
        <div>{block.txnCount} txns in {block.time} secs</div>
      </div>
      <div className="block-reward">{block.reward} MATIC</div>
    </div>
  );
};

export default Block;

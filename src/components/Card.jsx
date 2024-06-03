import React from 'react';
import './Card.css';

const Card = ({ number, icon }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="number">{number}</div>
    </div>
  );
};

export default Card;
import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {
  const cards = [
    { number: "199+", icon: '❤' },
    { number: "1591+", icon: '🕓' },
    { number: "283+", icon: '☑' },
    { number: "75+", icon: '🏆' },
  ];

  return (
    <div>
    <div className='expert'>
    <h1>
      EXPERT GROWTHS
    </h1>
    </div>
    <div className='growth'>
     OUR COMPANY GROWTH
    </div>
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} number={card.number} icon={card.icon} />
      ))}
    </div>
    </div>

  );
};

export default CardContainer;
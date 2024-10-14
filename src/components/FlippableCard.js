// src/components/FlippableCard.js
import React, { useState } from 'react'; // useState é importado do React para gerenciar o estado do componente, que é utilizado para controlar se o cartão está virado (flipped) ou não

function FlippableCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default FlippableCard;

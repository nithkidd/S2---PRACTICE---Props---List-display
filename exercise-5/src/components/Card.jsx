import React from 'react';

function Card({ name, image, alt, class: className, hobbies }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p><strong>Class:</strong> {className}</p>
      <p><strong>Hobbies:</strong> {hobbies}</p>
    </div>
  );
}

export default Card;
import React from 'react';


const Card = (props) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={props.img}/>
      <div className='tc'>
        <h2>{props.nick}</h2>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
    </div>
  )
};

export default Card;
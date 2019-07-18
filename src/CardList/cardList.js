import React from 'react';
import Card from "../Card/Card";

const CardList = ({robots}) => {
  const cardsList = robots.map((robot, idx) => {
    return <Card key={idx} id={robot.nick} name={robot.name} email={robot.email} img={robot.img}/>
  });
  return (
    <div className='ba bw2 b--black-30'>
      {cardsList}
    </div>
  )
};

export default CardList;
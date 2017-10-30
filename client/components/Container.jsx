import React from 'react';
import inventoryImages from './../../data/inventoryImages';
import './../styles/items.scss';

const Container = ({ inventory }) => {

  const arr = inventory.map((x, index) => {
    return <li key={index}><img className='inventoryImage' src={inventoryImages[x.name]} />{x.name}<br />{x.description}<br />$ {x.price.toFixed(2)}</li>
  });

  return (
    <ul>
      {arr}
    </ul>
  )
};

export default Container;
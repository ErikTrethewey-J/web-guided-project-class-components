import React from 'react';

const Item = props => {
  return (
    <div
      className={`item${props.item.purchased ? ' purchased' : ''}`}
      onClick={() => props.togglePurchased(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
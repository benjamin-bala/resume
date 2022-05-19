import React from 'react';
import Ball from '../Ball';
import Game from '../Game';
import './hobbies.css';

export default function Hobbies() {
  return (
    <div className='my-3'>
      <h3 className='text-large'>Hobbies</h3>
      <div className='my-3 hobbies'>
        <Ball />
        <Game />
      </div>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Card from './Card.js';


const Wel="Wellcome User";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 
    <h1 className='headingstyle'>{Wel}</h1>
    <Card />
    <Card />
    <Card />
    <Card />
    </div>

);




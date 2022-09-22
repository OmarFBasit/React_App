import React from 'react';
import ReactDOM from 'react-dom/client';

const Wel="Wellcome User";
const con="Contact";
const date=new Date();
const currentYear=date.getFullYear();
const todaydate=date.getDate();
const todaymonth=date.getMonth();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 
    <h1>{Wel}</h1>
    <h3>{con}</h3>
    <p>{todaydate}- {todaymonth} -{currentYear} </p>
    </div>

);




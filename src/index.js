import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Wel="Wellcome User";
const con="Contact";
const date=new Date();
const currentYear=date.getFullYear();
const todaydate=date.getDate();
const todaymonth=date.getMonth();
// const headingstyle = {  
//   color: "white",  
//   backgroundColor: "purple",  
//   padding: "15px",  
//   fontFamily: "Arial",
//   textAlign: "center",
//   fontSize: "3rem" 
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 
    <h1 className='headingstyle'>{Wel}</h1>
    <h3>{con}</h3>
    <p>{todaydate} - {todaymonth} -{currentYear} </p>
    </div>

);




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

    <div className='card'>
    <h3 className='cardtitle'>{con}</h3>
    <p className='cardfooter'>{todaydate} - {todaymonth} -{currentYear} </p>
    </div>

    </div>

);




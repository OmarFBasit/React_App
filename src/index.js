import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Wel="Wellcome User";
const con="Card Note";
const date=new Date();
const currentYear=date.getFullYear();
const todaydate=date.getDate();
const todaymonth=date.getMonth();

function Card(){
return <div className='card'>
<h3 className='cardtitle'>{con}</h3>
<p className='cardDescription'>Hoping for a better future. One day I can achieve sure.</p>
<p className='cardfooter'>{todaydate}/{todaymonth}/{currentYear} </p>
</div>

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 
    <h1 className='headingstyle'>{Wel}</h1>

    <div className='card'>
    <h3 className='cardtitle'>{con}</h3>
    <p className='cardDescription'>Hoping for a better future. One day I can achieve sure.</p>
    <p className='cardfooter'>{todaydate}/{todaymonth}/{currentYear} </p>
    </div>

    <Card />
    <Card />
    <Card />

    

    </div>

);




const con="Card Note";
const date=new Date();
const currentYear=date.getFullYear();
const todaydate=date.getDate();
const todaymonth=date.getMonth();

function Card(props){
return  <div className='card'>
<h3 className='cardtitle'>{props.titletex}</h3>
<p className='cardDescription'>{props.description}</p>
<p className='cardfooter'>{todaydate}/{todaymonth}/{currentYear} </p>
</div> 
}
export default Card;
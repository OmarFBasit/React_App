const date=new Date();
const currentYear=date.getFullYear();
const todaydate=date.getDate();
const todaymonth=date.getMonth();

function Card(props){
    const {titletex,description}=props;
return  <div className='card'>
<h3 className='cardtitle'>{titletex}</h3>
<p className='cardDescription'>{description}</p>
<p className='cardfooter'>{todaydate}/{todaymonth}/{currentYear} </p>
</div> 
}
export default Card;
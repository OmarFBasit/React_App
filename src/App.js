import React from 'react';
import Card from './components/Card.js';
import Data from './data.json'

let items=[];
for(let x=0;x<Data.length;x++){
    items.push(<Card titletex={Data[x].title} description={Data[x].Description}/>)
}

const Wel="Wellcome User";
function App(){
    return <div>
        <h1 className='headingstyle'>{Wel}</h1>
        {items}
    </div>

}
export default App;
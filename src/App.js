import React from 'react';
import Card from './components/Card.js';
import Data from './data.json'

let items=[];
items=Data.map((items,index)=> <Card key={index} titletex={items.title} description={items.Description}/>)

const Wel="Wellcome User";
function App(){
    return <div>
        <h1 className='headingstyle'>{Wel}</h1>
        {items}
    </div>

}
export default App;
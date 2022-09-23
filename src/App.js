import React from 'react';
import Card from './components/Card.js';
import Data from './data.json'

const Wel="Wellcome User";
function App(){
    return <div>
        <h1 className='headingstyle'>{Wel}</h1>
        <Card titletex={Data[0].title} description={Data[0].Description}/>
        <Card titletex={Data[1].title} description={Data[1].Description}/>
        <Card titletex={Data[2].title} description={Data[2].Description}/>
    </div>

}
export default App;
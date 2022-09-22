import React from 'react';
import Card from './components/Card.js';
const Wel="Wellcome User";
function App(){
    return <div>
        <h1 className='headingstyle'>{Wel}</h1>
        <Card /> <Card /> <Card /> <Card />
    </div>

}
export default App;
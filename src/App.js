import React from 'react';
import Card from './components/Card.js';
const Wel="Wellcome User";
function App(){
    return <div>
        <h1 className='headingstyle'>{Wel}</h1>
        <Card titletex="Card Note 1" description="Inshall one day i can achieve"/>
        <Card titletex="Card Note 2" description="Omar Can Do this"/>
        <Card titletex="Card Note 3" description="Hello world"/>
    </div>

}
export default App;
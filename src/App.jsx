import { useState } from 'react'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  //console.log(puppies);
  //console.log('hello');
  const [featPupId, setFeatPupId] = useState(null)
  console.log('hellloooo');
  function handleClick () {
    ()=>{console.log("puppy id: ", puppy.id)}
  }

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}

export default App

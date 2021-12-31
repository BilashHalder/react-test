import React,{useState} from 'react'

export default function Inputs() {
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);
    function showData(val) {
        setName(val.target.value);
    }
function changeFlag() {setFlag(!(flag));
}
    return (
        <div>
          <h1>Name: {name}</h1> 
          <div> 
              <span>
                  First Name :  <input onChange={showData}></input> 
              </span>
          </div>
          <div> 
             <button onClick={changeFlag}>{flag?'Hide':'Show'}</button>
          </div>



        </div>
    )
}

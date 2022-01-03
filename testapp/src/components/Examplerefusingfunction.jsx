import React,{useRef} from 'react'

export default function Examplerefusingfunction(props) {
    let inpRef=useRef();
    return (
        <div>
          <input type="text" ref={inpRef}></input>  
          <button onClick={()=>{
              //console.log('btn');

///////Forward Ref Example
console.log('change in app js');
props.data.current.style.color='blue';


              //inpRef.current.value="1000";
                inpRef.current.style.border='1px solid red'
          }}>Change Html</button>
        </div>
    )
}

import React,{useState,useEffect} from 'react'

export default function EampleUseMemo() {
let [count,setCount]=useState(0);
let [mcount,setMcount]=useState(1);

useEffect(()=>{
    console.log('Use Effect Called using Memo');
});
function countinc(){
    console.warn('fun1 called')
    setCount(++count); 
}
function mcounts(){
    console.warn('fun2 called')
    setMcount(mcount*2); 
}
    return (

        <div>
            <h1>Use Memo Example</h1>
            <h2>{count}</h2>
            <h2>Counter ** {mcount}</h2>
            <button onClick={()=>countinc()}>Counter++</button>

<button onClick={()=>mcounts()}>Counter**</button>
        </div>
    )
}

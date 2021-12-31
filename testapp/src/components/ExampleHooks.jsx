import React,{useState,useEffect} from 'react'
 
export default function ExampleHooks(props) {
const [data,setData]=useState('default');//useState Hook to strore state variable
const [data2,setData2]=useState('default');
const [data3,setData3]=useState('default');
useEffect(() => {
 console.log('UseEffect Called for all Life cycle')   
    
})
useEffect(() => {
    console.log('UseEffect Called for data2 ')  
}, [data2])//only for one state

useEffect(() => {
    console.log('UseEffect Called for data2  and data3')  
}, [data2,data3])//only for one state
useEffect(() => {
    console.log('UseEffect Called for props update')  
}, [props])//for all props
useEffect(() => {
    console.log('UseEffect Called for Single props ')  
}, [props.name])//for all props

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>State Value {data}</h1>
            <button onClick={()=>{
                setData(String(new Date().getTime()));
            }}>Update State</button>


<button onClick={()=>{
                setData2(String(new Date().getTime()));
            }}>Update State2</button>

            
<button onClick={()=>{
                setData3(String(new Date().getTime()));
            }}>Update State3</button>
        </div>
    )
}

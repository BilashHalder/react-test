import React,{useState} from 'react'

export default function ExmapleForm() {
const[tinput,setTinput]=useState();
const[ninput,setNinput]=useState();
const[einput,setEinput]=useState();
const[sinput,setSinput]=useState(0);
const[cinput,setCinput]=useState();
    function getData(e) {
        e.preventDefault();//form not submitted
        console.log(sinput);
    }
    return (
        <div>
            <form onSubmit={getData}>
                <input placeholder='Enter text input' type='text' onChange={(e)=>{setTinput(e.target.value)}}></input>
                <input placeholder='Enter number input' type='number'onChange={(e)=>{setNinput(e.target.value);}}></input>
                <input placeholder='Enter email input' type='email' onChange={(e)=>{setEinput(e.target.value);}}></input>
                <input type='checkbox'onChange={(e)=>{setCinput(e.target.checked);}}></input>Check Box input
                <select onChange={(e)=>{setSinput(e.target.value);}}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button type='submit'>Submit</button>
            </form>

            {
              cinput?<h1>Thank You </h1>:<h1>Please Check </h1>
              
            }
            {
                sinput==0?<h1>Please Select</h1>:sinput===1?<h1>1</h1>:sinput===2?<h2>2</h2>:<h2>sorryy</h2>//Example Multiple Conditional Statement
            }
        </div>
    )
}

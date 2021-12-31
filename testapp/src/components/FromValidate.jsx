import React,{useState} from 'react'
let errStyle={
    border: '1px solid red'
}
let succStyle={
    border: '1px solid green'
}
export default function FromValidate(props) {
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
 <input placeholder='Enter text input' type='text' onChange={(e)=>{setTinput(e.target.value)} } style={String(tinput).length<3?errStyle:succStyle}></input>  <br/>  <br/>
                <input placeholder='Enter number input' type='number'onChange={(e)=>{setNinput(e.target.value);}} style={String(ninput).length<10?errStyle:succStyle}></input>  <br/>  <br/>
                <input placeholder='Enter email input' type='email' onChange={(e)=>{setEinput(e.target.value);}}style={String(einput).length<8?errStyle:succStyle}></input>  <br/>  <br/>
                <input type='checkbox'onChange={(e)=>{setCinput(e.target.checked);}}style={cinput==false?errStyle:succStyle}></input>Check Box input  <br/>
                <br/>
                <select onChange={(e)=>{setSinput(e.target.value);}}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br/>  <br/>
                <button type='submit'>Submit</button>
            </form>

            <button onClick={props.parentfun}>Call Props Function</button>
        </div>
    )
}

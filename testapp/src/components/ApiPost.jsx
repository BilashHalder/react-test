import React,{useState,useEffect}from 'react'

export default function ApiPost() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 useEffect(()=>{
     
 });

 function sendData(){
     let posturl='https://reqres.in/api/users';
     let data={name,email};
    fetch(posturl,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((res)=>{
res.json().then((re)=>{
    console.log(re)
})
    })
 }
    return (
        <div>
            <h1 className='pt-5 text-center text-success'>This is Api Post Example....</h1>
            <div className='p-5'>
                <input type="text" className='form-control mt-3' placeholder='Enter Name' name='name'onChange={(e)=>{setName(e.target.value) }}/>
                <input type="email" className='form-control mt-3' placeholder='Enter Email' name='job'onChange={(e)=>{setEmail(e.target.value) }}/>
                <input type="number" className='form-control mt-3' placeholder='Enter phone No' onChange={(e)=>{setPhone(e.target.value) }}/>
                <button className='mt-3 btn btn-outline-success' onClick={()=>sendData()}>Submit Data</button>
            </div>
        </div>
    )
}

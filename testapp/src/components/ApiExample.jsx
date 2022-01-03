import React,{useEffect,useState} from 'react'

export default function ApiExample() {
    const [result,setResult]=useState([]);
    const apiurl='https://reqres.in/api/users';

    const [first_name, setFname] = useState('');
    const [last_name, setLname] = useState('');
    const [img, setImg] = useState('');
    const [email, setEmail] = useState('');
    const [uid, setUid] = useState('');



function delItem(id){
    fetch(`https://reqres.in/api/users/${id}`,{
        method:'DELETE'
    }).then((res)=>{
res.json().then((resp)=>{
console.log(resp)
})
    })
}

function updateData(){
    console.warn(first_name)
}
function editItem(id){
fetch(`https://reqres.in/api/users/${id}`).then((res)=>{
res.json().then((data)=>{
    setFname(data.data.first_name);
    setLname(data.data.last_name);
    setImg(data.data.avatar);
    setEmail(data.data.email);
    setUid(id);
    console.log(data.data)

})
})
}
    useEffect(()=>{
        console.warn('effect');
        fetch(apiurl).then((apidata)=>{
            apidata.json().then((res)=>{
                    console.log(res.data);
                    setResult(res.data)
            })
                })
    },[]);

    return (
        <div>
          <h1 className='text-center text-primary mb-5'>APi EXample Data</h1> 
      <div className='row'>
<div className='col-md-7'>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
      <th scope="col">Image</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

                    {

                        result.map((item, ind) => {
                            return (
                                <>
                                    <tr >
                                        <th scope="row">{item.id}</th>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td><img className='img img-thumbnail' src={item.avatar} /></td>
                                        <td><button className='btn btn-danger mt-4 ms-3' onClick={() => delItem(item.id)}>Delete</button></td>
                                        <td><button className='btn btn-warning mt-4 ms-3' onClick={() => editItem(item.id)}>Edit</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
  </tbody>
</table>
</div>
<div className='col-md-4 ms-5'>
<h3 className='text-center'>Edit Data</h3>
<br/>

<input type='text' className='form-control m-2'value={first_name} onChange={(e)=>{ setFname(e.target.value);}}/> 
<input type='text'className='form-control m-2' value={last_name} onChange={(e)=>{ setLname(e.target.value);}}/>
<input type='text' className='form-control m-2' value={email} onChange={(e)=>{ setEmail(e.target.value);}}/>
<button className='btn btn-outline-primary ms-5 mt-3' onClick={()=>updateData()} >Save Data</button>
</div>
      </div>
          
        </div>
    )
}

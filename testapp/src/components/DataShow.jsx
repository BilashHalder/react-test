import React from 'react'
import apidata from '../api/userData'
export default function DataShow() {
    let data=[
        {name:'bilash',dept:'cse',year:2012},
        {name:'bilash2',dept:'cse2',year:2013},
        {name:'bilash3',dept:'cse3',year:2013},
];
return(<>
<h1>This is Data Show</h1>
<table className="table table">
    <thead>
        <th>Number</th>
        <th>Id</th>
        <th>title</th>
        <th>completed</th>
    </thead>
    {
    apidata.map((item,key)=>{
      
  return  (<tr key={key} scope="row">
    <td>{item.id}</td>
    <td>{item.userId}</td>
    <td>{item.title}</td>
    <td>{item.completed}</td>
  </tr>)
    })
}

   
</table>

</>);


   
}

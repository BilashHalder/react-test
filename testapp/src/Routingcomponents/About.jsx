import React from 'react';
import {BrowserRouter as Router,Link, Routes} from 'react-router-dom';
export default function About() {
    let users=[{name:'user1',dept:'cse'},
{name:'user2',dept:'IT'},
{name:'user3',dept:'ETC'},
{name:'user4',dept:'CE'},
{name:'user5',dept:'ME'}]
    return (
        <div className='pt-5'>
    
        <h1 className='text-center'><strong>This is About Page</strong></h1>
        {
            users.map((item,key)=>{
           return( <>
           <p key={key}>{item.name} || {item.dept}</p> <Link to={'/userinfo/'+key} >Edit</Link>
           </>)
            })
        }
    </div>
    )
}

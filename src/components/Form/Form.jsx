import React, { useState } from 'react';
import './form.css'

export default function Form() {

  const [firstName,setFirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setEmail]=useState('')

  const submitHandler=async(event)=>{
    event.preventDefault()
    let userInfoes={
      firstName,
      lastName,
      email
    }
    const res=await fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(userInfoes)
    })

    console.log(res);
    const result=await res.json()
    console.log(result);

  }
  return (
    <div className='form-wrap'>
        <div className="form-content">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter FirstName'onChange={(event)=>setFirstName(event.target.value)}/>
                <input type="text" placeholder='Enter LastName' onChange={(event)=>setlastName(event.target.value)}/>
                <input type="email" placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
      
    </div>
  );
}

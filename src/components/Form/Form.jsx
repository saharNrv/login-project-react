import React from 'react';
import './form.css'

export default function Form() {

  
  return (
    <div className='form-wrap'>
        <div className="form-content">
            <form>
                <input type="text" placeholder='Enter FirstName'/>
                <input type="text" placeholder='Enter LastName' />
                <input type="email" placeholder='Enter Email' />
                <button type='submit'>Register</button>
            </form>
        </div>
      
    </div>
  );
}

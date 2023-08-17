import React from 'react';

import './button.css';

export default function Button({ icon, name, classes}) {
    return (
       <button className={`btn ${classes}`}>
         <i className='icon icon--white'>{icon}</i>
         <span className='content'>{name}</span>
       </button>
    )
}
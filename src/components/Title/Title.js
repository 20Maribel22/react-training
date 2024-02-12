import React from 'react'
import Input from '../Input/Input';
import "./Title.css"

function Title({number}) {
  return (
    <div className='title'>
    <h1>Title</h1>
    <Input  passwords={number}/>
    </div>
    
  )
}

export default Title;
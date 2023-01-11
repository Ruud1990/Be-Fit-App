import React, { useState, useEffect, useRef } from 'react'


const GroceryForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('')
    }
  return (
    <>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {props.edit 
        ? 
            (<>
             <input 
            type='text' 
            placeholder='edit your item' 
             value={input} 
            name='text' 
            className='grocery-input edit' 
            onChange={handleChange} 
            ref={inputRef}>
            </input>
                <button className='btn btn-edit'>Edit Item</button></>) 
                    : 
                    (<>
                     <input 
                    type='text' 
                placeholder='add your items to buy' 
        value={input} name='text' 
        className='grocery-input' 
        onChange={handleChange} 
        ref={inputRef}>
        </input>
        <button className='btn'>Add item</button></>)}
          
      </form>
      </>
  )
}

export default GroceryForm
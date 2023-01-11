import React, {useState} from 'react';
import GroceryForm from './GroceryForm';
import {RiCloseCircleFill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';

const GrocerySingleItem = ({items, completeItem, removeItem, editItem}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })


    const submitEdit = (value) => {
        editItem(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if(edit.id) {
        return <GroceryForm edit={edit} onSubmit={submitEdit} />
    }

  return items.map((item, index) => (
    
      <div className={item.isComplete ? 'item-row complete' : 'item-row'} key={index}>
         <div key={item.id} onClick={() => completeItem(item.id)}>{item.text}</div>
      <div className='item-icons'>
        <RiCloseCircleFill onClick={() => removeItem(item.id)} className='delete-icon'/>
        <AiFillEdit onClick={() => setEdit({ id: item.id, value: item.text})} className='edit-icon'/>
      </div>
      </div>
    

  ))
}

export default GrocerySingleItem
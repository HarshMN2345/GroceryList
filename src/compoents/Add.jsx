import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Add = ({handleSubmit,NewItem,setNewItem}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input 
            type='text'
            id='addItem'
            placeholder='Add a item'
            name='addItem'
            value={NewItem}
            onChange={(e)=>setNewItem(e.target.value)}
            required
        />
        <button type='submit' aria-label='add ietm'>
            <FaPlus/>
        </button>


    </form>
  )
}

export default Add
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchItem = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input 
            type='text'
            id='searchItem'
            placeholder='Search item'
            name='searchItem'
            required
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
         <button type='submit' aria-label='search'>
            <FaSearch/>
        </button>
    </form>
  )
}

export default SearchItem
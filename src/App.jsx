import React, { useState, useEffect } from 'react';
import Header from './compoents/Header';
import Footer from './compoents/Footer';
import Center from './compoents/Center';
import Add from './compoents/Add';
import SearchItem from './compoents/SearchItem';
import { apiRequest } from './compoents/ApiRequest';

function App() {
  const API_URL = "http://localhost:3500/items";
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Fetch failed');
        }
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null); // Clear fetch error if successful
      } catch (error) {
        console.log('Error fetching data:', error);
        setFetchError('Error Fetching resources');
      } finally{
        setIsLoading(false);
      }
    };

    fetchItems(); // Invoke fetchItems() to initiate data fetching

  }, []); // Empty dependency array ensures this effect runs only on mount

  const saveItemsToLocalStorage = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem('shoppinglist', JSON.stringify(updatedItems));
  };

  const handleCheck = async(id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems)
    const myItem=updatedItems.filter((item)=>item.id===id);
    const updateOptions={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl=`${API_URL}/${id}`
    const result=await apiRequest(reqUrl,updateOptions);
    if(result) setFetchError(result);
  };
  const AddItem=async(item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItemObject = { id: id, checked: false, item: newItem };
    const updatedItems = [...items, newItemObject];
    setItems(updatedItems);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItemObject)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl=`${API_URL}/${id}`
    const result=apiRequest(reqUrl,deleteOptions);
    if(!result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      AddItem(newItem);
    }
  };

  return (
    <div className='App'>
      <Header title="Grocery List" />
      <SearchItem search={search} setSearch={setSearch} />
      <Add handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
  
      {isLoading && <p>Loading Items...</p>}
      {fetchError && <p style={{color: "red"}}>Error Fetching resources</p>}
  
      {!fetchError && !isLoading && (
        <Center
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
        />
      )}
  
      <Footer />
    </div>
  );  
}

export default App;

import { axiosInstance } from '@/api/axiosInstance'
import React from 'react'

const CallApi= () => {
  async function handleClick(){
  
   
    const response = await axiosInstance.get("/getcategories");

    const data = response.data;
    console.log(data, "reduc categogy");
    }
  return (
    <div>
      <h1>Calling api</h1>
      <button onClick={handleClick}>Hit me </button>
    </div>
  )
}

export default CallApi

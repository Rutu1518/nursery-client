
import React from 'react'
import toast from 'react-hot-toast'
import "./PlantCard.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


function PlantCard({_id, name, category, image, price, description, loadPlants}) {

        const deletePlant = async (plantId) =>{
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
        toast.success(response.data.message)

        loadPlants()
    }
  return (
    <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-price'>price: {price}</p>
        <img src={image} className='plant-img'/>
        <p className='plant-category'>{category}</p>
        <p className='plant-description'>{description}</p>
      

      <div>
        <Link   
        className='plant-card-action-btn' to={`/update/${_id}`}>
            Edit
            </Link>


        <button type='button'
         className='plant-card-action-btn' 
         onClick = {()=>{
           deletePlant(_id)
          }}>
            Delete</button>
      </div>
    </div>
  )
}

export default PlantCard

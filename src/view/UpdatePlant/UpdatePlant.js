import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import AddPlant from '../AddPlant/AddPlant';
import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';
 import { Link } from 'react-router-dom';
 

function UpdatePlant() {

    const {id} = useParams();

    const[name, setname] = useState("")
    const[category, setcategory] = useState("")
    const[price, setprice] = useState("")
    const[image, setiamge] = useState("")
    const[description, setdescription] = useState("")

    const updatePlant = async()=>{

        const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
            name:name,
            category:category,
            price:price,
            image:image,
            description:description
        })
         
        toast.success(response.data.message)
       
    }
   
    const loadPlant = async (id) =>{

        if(!id){
            return
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
       
        const{name,category,price,image,description} = response.data.data     
       
      
        setname(name)
        setcategory(category)
        setprice(price)
        setiamge(image)
        setdescription(description)

    }       


    useEffect(() => {        
          loadPlant(id)        
    }, [id])

  return (
    <div>
      <h1>Update Plant:{id}</h1>
      <form>

     <input type="text"
       placeholder="Enter Plant Name"
       value={name}
       onChange={(e)=>setname(e.target.value)}
       className="palnt-input"              
       />



    <input type="number"
       placeholder="Enter Plant Price"
       value={price}
       onChange={(e)=>setprice(e.target.value)}
       className="palnt-input"              
       />

    <input type="text"
       placeholder="Enter Plant Category"
       value={category}
       onChange={(e)=>setcategory(e.target.value)}
       className="palnt-input"              
       />
   <img src={image} className="img-priview"/>

   <input type="text"
       placeholder="Enter Plant image URL"
       value={image}
       onChange={(e)=>setiamge(e.target.value)}
       className="palnt-input"              
       />

    <input type="text"
       placeholder="Enter Plant Description"
       value={description}
       onChange={(e)=>setdescription(e.target.value)}
       className="palnt-input"              
       />

   <button type='button' onClick={updatePlant}  className='add-plant-btn'>Update Plant</button>
    </form>
    <br/>
    <br/>
    <br/>
    <Link to="/" className='show-all-palnt-btn'>Show All Plants</Link>
    <Toaster/>
    </div>
  )
}

export default UpdatePlant

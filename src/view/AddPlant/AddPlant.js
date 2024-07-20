import React from 'react'
import "./AddPlant.css"
// import React, { useState } from 'react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {
    const[name, setname] = useState("")
    const[category, setcategory] = useState("")
    const[price, setprice] = useState("")
    const[image, setiamge] = useState("")
    const[description, setdescription] = useState("")

    const addplant = async ()=>{

        toast.loading("Adding Plant.....")

        if(!name || !category || !price || !image || !description){
            toast.error("Please Enter All Details")
            return
        }
        
        const response =  await axios.post(`${process.env.REACT_APP_API_URL}/plant`,{
            name:name,
            price:price,
            category:category,
            image:image,
            description:description

       })

       toast.dismiss()

       toast.success(response.data.message)

       setname("")
       setcategory("")
       setprice("")
       setiamge("")
       setdescription("")

    }    

  return (
    <div>
      {/* <h1>add plant</h1> */}
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

        <button type='button' onClick={addplant} className='add-plant-btn'>Add Plant</button>
      </form>

      <br/>
      <br/>

      <Link to="/" className='show-all-palnt-btn'>Show All Plants</Link>

      <Toaster/>
    </div>
  )
}

export default AddPlant

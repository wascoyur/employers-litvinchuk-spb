 import React, {useState} from 'react'
 import CardDetail from "./card-details";
 import CardPhoto from "./card-photo";
 
const Card = ()=>{
  const [count] = useState('')
  return(
    <div className="flex md:flex-row mx-auto min-h-screen items-start">
      <CardPhoto/>
      <CardDetail />
    </div>
  
  )
 }
 export default Card
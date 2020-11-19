import React, {useState} from 'react';

const Onion = ()=>{
  const [content, setContent] = useState('Убрать лук')
  return(
    <div
      className="mx-2 p-1 text-gray-600 border-2 border-gray-600"
      onClick={()=>{setContent('Оставить')}}
    >{content}</div>
  )
}
export default Onion
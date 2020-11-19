import React,{useState} from 'react';


const CardDetail = ()=>{
  const [cur, addCount] = useState(1);
  
  return(
      <div className="m-1  w-1/2 ">
        <div id="short-description " className="p-4" >
          <div id="header"className="flex justify-between">
            <h3 id="title" className="text-xl font-extrabold">Ветчина и грибы</h3>
            <div id="price" className="text-lg font-extrabold">146р</div>
          </div>
          <div id ="reviews" className="text-gray-600 text-xs md-6">
            <div id="raiting">5</div>
            <div id="selector">20 отзывов</div>
          </div>
          
          <div id="spice" className="flex flex-row justify-between text-xs">
            
            <div id="selector">убрать лук</div>
            <div id="selector">убрать лук</div>
            <div id="selector">убрать лук</div>
            <div id="selector">убрать лук</div>
            <div id="selector">убрать лук</div>
          </div>
        </div>
        
        <div id="description" className="p-5 bg-gray-900 text-white">
          <div id="title" className="">Описание</div>
          <div id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore , sed do eiusmod tempor incididunt ut labore</div>
          <div id="weight" className="m-3 text-gray-600">425gr</div>
          <div id ="counter-wrapper" className="flex justify-between text-2xl">
            <button className="btn w-8 m-4 bg-white text-black"
              onClick={()=>{addCount(cur +1)}}
            >+</button>
              <div id="count" className="m-4">{ cur }</div>
            <button className="btn w-8 m-4 bg-white text-black"
              onClick={() =>{
                if (cur<=1)return cur;
                addCount(cur -1)}}
            >-</button>
            <button className="min-w-min max-w-lg bg-red-600 flex-grow">В корзину</button>
          </div>
        </div>
      </div>
  )
}
export default CardDetail
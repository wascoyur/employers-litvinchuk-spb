import React,{useState} from 'react';


const CardDetail = ()=>{
  const [cur, addCount] = useState(1);
  
  return(
      <div className="m-1 md:h-16 w-1/2 ">
        <div id="short-description " className="p-4" >
          <div id="header"className="flex justify-between">
            <h3 id="title" className="text-xl font-extrabold">Ветчина и грыбы</h3>
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
          <div id="weight" className="bg-gray-600">425gr</div>
          <div id ="counter-wrapper" className="flex justify-between text-2xl">
            <button className="btn"
              onClick={()=>{addCount(cur +1)}}
            >+</button>
              <div id="count">{ cur }</div>
            <button className="btn"
              onClick={() =>{
                if (cur<=1)return cur;
                addCount(cur -1)}}
            >-</button>
            <button className="w-24 bg-red-600 flex-initial">В корзину</button>
          </div>
        </div>
      </div>
  )
}
export default CardDetail
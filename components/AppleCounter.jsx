import React from 'react'
import Button from './Button'
import left from"../Assets/Images/left-arrow.svg"
import right from  "../Assets/Images/right-arrow.svg"
import './Application.css'
import { createRoot } from "react-dom/client";


const root = createRoot(document.querySelector('#root'))



import React from 'react'
import Basket from './Basket'

const TotalAppleCount = 10;
let RightAppleCount=0;
let LeftAppleCount=TotalAppleCount-RightAppleCount;

const AppleCounter = () => {

    const LeftClickHandler =()=>{
       RightAppleCount--;
       LeftAppleCount++;
       root.render(<AppleCounter/>)
    }

    const RightClickHandler=()=>{
     LeftAppleCount--;
     RightAppleCount++;
     root.render(<AppleCounter/>)
    }
  return (
     <section>
          <Basket BasketName={"LeftBasket"} BasketCount={LeftAppleCount}  />
         <Button ButtonName={"leftArow"} ButtonImage={left} clickhandler={LeftClickHandler}/>
         <Button ButtonName={"rightArow"} ButtonImage={right} clickhandler={RightClickHandler}/>
         <Basket BasketName={"RightBasket"}  BasketCount={RightAppleCount}/>
     </section>
  )
}

export default AppleCounter
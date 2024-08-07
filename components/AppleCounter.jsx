import React, { useState } from 'react'
import Button from './Button'
import left from"../Assets/Images/left-arrow.svg"
import right from  "../Assets/Images/right-arrow.svg"
import './Application.css'
import { createRoot } from "react-dom/client";


const root = createRoot(document.querySelector('#root'))



import React from 'react'
import Basket from './Basket'

const TotalAppleCount = 10;
// let RightAppleCount=0;
// let LeftAppleCount=TotalAppleCount-RightAppleCount;

const AppleCounter = () => {
    const TotalAppleCount = 10;
   const[RightApplecount , SetRightAppleCount]= useState(0);
   const[LeftApplecount , SetLeftAppleCount]= useState(TotalAppleCount-RightApplecount);

    const LeftClickHandler =()=>{
       SetRightAppleCount(RightApplecount-1)
       SetLeftAppleCount(LeftApplecount+1)

    //    root.render(<AppleCounter/>)
    }

    const RightClickHandler=()=>{
        SetRightAppleCount(RightApplecount+1)
        SetLeftAppleCount(LeftApplecount-1)
    //  root.render(<AppleCounter/>)
    }
  return (
     <section>
          <Basket BasketName={"LeftBasket"} BasketCount={LeftApplecount}  />
         <Button ButtonName={"leftArow"} ButtonImage={left} clickhandler={LeftClickHandler}/>
         <Button ButtonName={"rightArow"} ButtonImage={right} clickhandler={RightClickHandler}/>
         <Basket BasketName={"RightBasket"}  BasketCount={RightApplecount}/>
     </section>
  )
}

export default AppleCounter
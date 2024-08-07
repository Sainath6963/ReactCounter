import React from 'react'
import Button from './components/Button'
import left from"./Assets/Images/left-arrow.svg"
import right from  "./Assets/Images/right-arrow.svg"

const App = () => {
  return (
    <div>
        <Button ButtonName={"leftArow"} ButtonImage={left}/>
        <Button ButtonName={"rightArow"} ButtonImage={right}/>
    </div>
  )
}

export default App
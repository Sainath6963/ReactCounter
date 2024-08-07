import React from 'react'

const Button = ({ButtonName , ButtonImage,clickhandler}) => {
  return (
    <div>
        <button onClick={clickhandler}><img src={ButtonImage} alt={ButtonName}/></button>
    </div>
  )
}

export default Button
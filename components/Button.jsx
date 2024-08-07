import React from 'react'

const Button = ({ButtonName , ButtonImage}) => {
  return (
    <div>
        <button><img src={ButtonImage} alt={ButtonName}/></button>
    </div>
  )
}

export default Button
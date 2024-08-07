import React from 'react'

const Basket = ({BasketName,BasketCount}) => {
  return (
    <div>
        <h1>{BasketName}</h1>
        <p>{BasketCount}</p>

    </div>
  )
}

export default Basket
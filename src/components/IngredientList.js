import React from 'react'

export default function IngredientList({ ingredients }) {
  return (
  <ul>
    {ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
      
  )
}

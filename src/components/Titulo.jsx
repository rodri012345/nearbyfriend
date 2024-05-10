import React from 'react'
import './Titulo.css'

const Titulo = ({subTitulo, titulo}) => {
  return (
    <div className='titulo'>
        <p>{subTitulo}</p>
        <h2>{titulo}</h2>
    </div>
  )
}

export default Titulo
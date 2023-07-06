import React from 'react'
import { styled } from 'styled-components'

const InputsSect = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input{
    
  }
`

const Send = styled.div`
  button{
    cursor: pointer;
  }
`

const Inputs = () => {
  return (
    <InputsSect>
      <input type="text" placeholder='Escribe aqui...' />
      <Send>
        <button>Send</button>
      </Send>
    </InputsSect>
  )
}

export default Inputs
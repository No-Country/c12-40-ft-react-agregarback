import React from 'react'
import { styled } from 'styled-components'

const InputsSect = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid gray;

  input{
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 18px;
    color: #2f2d52;

    &::placeholder{
      color: lightgray;
    }
  }
`

const Send = styled.div`
  height: 100%;
  padding: 1px;
  display: flex;
  text-align: center;
  
  button{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    background-color: #DA7FBB;
    border-radius: 5px;

    &:hover{
      background-color: #CE55A5;
      
    }
  }
`

const Inputs = () => {
  return (
    <InputsSect>
      <input type='text' placeholder='Escribe aqui...' />
      <Send>
        <button>Send</button>
      </Send>
    </InputsSect>
  )
}

export default Inputs

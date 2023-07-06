import React from 'react'
import { styled } from 'styled-components'

const Dashboard = styled.aside`

  background-color: green;

  min-height: 100vh;
  max-width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

`

export const Page = () => {
  return (
    <Dashboard>
      <img src='#' alt='Howdy'/>

    </Dashboard>
  )
}

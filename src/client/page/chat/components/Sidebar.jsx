import React from 'react'
import { styled } from 'styled-components'

const Aside = styled.div`
  flex: 1;
  background-color: blue;
`

const Sidebar = () => {
  return (
    <Aside>Sidebar prueba</Aside>
  )
}

export default Sidebar
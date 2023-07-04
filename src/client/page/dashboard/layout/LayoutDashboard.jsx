import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = styled.div`

  display: flex;
  width: 100%;
`

const Aside = styled.aside`

  background-color: green;

  min-height: 100vh;
  max-width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

`

const InnerLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const Header = styled.header`

  background-color: red;

  min-width: 60%;
`

const Main = styled.main`
  background-color: blue;

  height: 100%;
`

export const LayoutDashboard = () => {
  return (
    <Layout>
      <Aside>
        Aside
      </Aside>
      <InnerLayout>
        <Header>
          Header
        </Header>
        <Main>
          <Outlet />
        </Main>
      </InnerLayout>
    </Layout>
  )
}

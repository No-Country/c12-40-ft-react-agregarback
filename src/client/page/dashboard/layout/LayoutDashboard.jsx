import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = styled.div`

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Aside = styled.aside`

  background-color: green;

  height: 100%;
  max-width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

  ul{
    margin-top: 32px;
    
    li{
      margin-top: 8px;
      cursor: pointer;
    }
  }

`

const InnerLayout = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`

const Header = styled.header`

  background-color: red;

  padding: 16px;

  width: 100%;

`

const Main = styled.main`
  background-color: blue;

  padding: 32px;

  height: 100%;
  width: 100%;
`

export const LayoutDashboard = () => {
  return (
    <Layout>

      <Header>
        Header
      </Header>

      <InnerLayout>

        <Aside>
          Aside
          <ul>
            <Link to={'.'}><li>Dashboard</li></Link>
            <Link to={'opcion1'}><li>Opcion 1</li></Link>
            <Link to={'opcion2'}><li>Opcion 2</li></Link>
            <Link to={'opcion3'}><li>Opcion 3</li></Link>
          </ul>
        </Aside>

        <Main>
          <Outlet />
        </Main>

      </InnerLayout>
    </Layout>
  )
}

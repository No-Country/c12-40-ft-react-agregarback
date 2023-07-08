import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = styled.div`

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
const InnerLayout = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`

const Header = styled.header`

  background-color: white ;

  padding: 24px 40px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  
  color: black;

  nav{
    ul{
      display: flex;
      gap: 16px;
    }

    select{
      outline: none;

      option{
        padding: 16px;
      }
    }
  }

  .logo{

    display: flex;
    align-items: center;
    gap: 8px;


    img{
      max-width: 37.5px;
    }
  }

  .icons{
    display: flex;
    gap: 16px;
  }

`

const Main = styled.main`
  background-color: blue;

  padding: 32px;

  height: 100%;
  width: 100%;
`

const data = [
  {
    name: 'Blog',
    path: 'blog'
  },
  {
    name: 'Nosotros',
    path: 'nosotros '
  }
]

export const LayoutDashboard = () => {
  return (
    <Layout>

      <Header>
        <div className='logo'>
          <img alt='Howdy' src='/howdy-logo.svg' />
          <h2>Howdy</h2>
        </div>

        <nav>
          <ul>
            {
              data.map((data, index) => {
                return <Link key={index} to={data.path}><li>{data.name}</li></Link>
              })
            }
            <select label='lang'>
              <option>ES</option>
              <option>EN</option>
            </select>
          </ul>
        </nav>

        <div className='icons'>
          <img src='../img/chat.png' />
          <img src='../img/saved.png' />
          <img src='../img/notifications.png' />
          |
          <img src='#'/>
        </div>
      </Header>

      <InnerLayout>

        <Main>
          <Outlet />
        </Main>

      </InnerLayout>
    </Layout>
  )
}

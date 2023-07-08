import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import chat from '../img/chat-icon.svg'
import saved from '../img/saved-icon.svg'
import notifications from '../img/notifications-icon.svg'
import profile from '../img/profile-icon.svg'

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
      gap: 2rem;
    }

    select{
      outline: none;
      appearance: radio;
      -webkit-appearance: radio;
      -moz-appearance: radio;
      -ms-appearance: radio;

      option{
        padding: 1rem;
      }
    }
  }

  .logo{

    display: flex;
    align-items: center;
    gap: 8px;

    h2{
      margin-right: 4rem;
    }


    img{
      max-width: 37.5px;
    }
  }

  .icons{
    display: flex;
    gap: 2rem;

    .icon{
      object-fit: contain;
    }
  }

`

const Main = styled.main`
  background-color: blue;

  padding: 2rem;

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

          <nav>
            <ul>
              {
                data.map((data, index) => {
                  return <Link key={index} to={data.path}><li>{data.name}</li></Link>
                })
              }
              <select label='lang'>
                <option value='ES'>ES</option>
                <option value='EN'>EN</option>
              </select>
            </ul>
          </nav>
        </div>

        <div className='icons'>
          <img src={chat} className='icon' />
          <img src={saved} className='icon' />
          <img src={notifications} className='icon' />
          |
          <img src={profile} alt='Perfil' />
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

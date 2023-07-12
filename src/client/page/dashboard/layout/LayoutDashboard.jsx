import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import chat from '../img/chat-icon.svg'
import saved from '../img/saved-icon.svg'
import notifications from '../img/notifications-icon.svg'
import profile from '../img/profile-icon.svg'
import arrow from '../img/arrow.svg'

const Layout = styled.div`

.tablet-desktop{
  display: none;
}

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .menu-icon{
    z-index: 2;
    width: 2rem;
    height: 2rem;
  }

  .active{
      opacity: 1 !important;
      transition: all ease-in-out 0.2s;
    }

  .nav-menu{
    color: black;
    position: absolute;
    top: 0;
    right: 0;

    min-width: 30%;
    max-width: 50%;
    height: 100vh;

    padding: 8rem 3rem;

    opacity: 0;
    transition: all ease-in-out 0.2s;


    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 2rem;
    }
  }

  @media screen and (min-width: 768px){
    .tablet-desktop{
      display: block;
    }

    .mobile{
      display: none;
    }
  }
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

      :first-child{
        margin-right: 1rem;
      }
      
    }

    select{
      outline: none;
      width: 100%;
      padding: 0 1rem;

      background: url(${arrow}) no-repeat;
      
      background-size: 12px;
      background-position: calc(100%);
      background-repeat: no-repeat;

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

  .vertical{
    height: 2rem;
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
  background-color: gray;

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

const menuAnimation = () => {
  const menu = document.querySelector('.nav-menu')
  menu.classList.toggle('active')
}

export const LayoutDashboard = () => {
  return (
    <Layout>

      <div className='tablet-desktop'>
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
            <Divider orientation='vertical' variant='middle' className='vertical' />
            <img src={profile} alt='Perfil' className='icon' />
          </div>
        </Header>
      </div>

      <div className='mobile'>
        <Header>
          <div className='logo'>
            <img alt='Howdy' src='/howdy-logo.svg' />
          </div>
          <MenuIcon className='menu-icon' onClick={() => menuAnimation()} />

        </Header>
        <nav className='nav-menu'>
          <ul>
            {
                data.map((data, index) => {
                  return <Link key={index} to={data.path}><li>{data.name}</li></Link>
                })
              }
          </ul>
        </nav>
      </div>

      <InnerLayout>

        <Main>
          <Outlet />
        </Main>

      </InnerLayout>
    </Layout>
  )
}

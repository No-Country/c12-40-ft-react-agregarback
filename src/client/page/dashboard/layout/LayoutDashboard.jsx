/* eslint-disable react/jsx-indent */
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import { Divider, Badge, Avatar, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import chat from '../img/chat-icon.svg'
import saved from '../img/saved-icon.svg'
import notifications from '../img/notifications-icon.svg'
import profile from '../img/profile-icon.svg'
import arrow from '../img/arrow.svg'
import profileMobile from '../img/profile.svg'
import home from '../img/home.svg'
import savedMobile from '../img/saved-mobile.svg'
import chatMobile from '../img/chat-mobile.svg'
import LogoutIcon from '@mui/icons-material/Logout'

import { useAppSelector } from '../../../../common/store/config'
import { useAuth } from '../../../../auth/hook/useAuth'

import { primary } from '../../../../common/variables'

import { useTranslation } from 'react-i18next'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tablet-desktop {
    display: none;
    position: sticky;
    top: 0;

    z-index: 999;
    width: 100%;
    max-width: 1400px;
  }

  .menu-icon {
    z-index: 4;
    width: 2rem;
    height: 2rem;
  }

  .nav-menu {
    color: black;
    position: absolute;
    top: 0;
    right: 0;

    z-index: -1;

    min-width: 30%;
    height: 100vh;

    padding: 8rem 3rem;

    opacity: 0;
    transition: all ease-in-out 0.2s;

    background-color: #ffffff;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      width: 100%;

      a{
        width: 100%;
        margin-bottom: 1rem;
      }

      li{
        width: 100%;
        margin-bottom: 1rem;
        select{
          padding: 0 1rem 0 0;
          background: url(${arrow}) no-repeat;

          background-size: 12px;
          background-position: calc(100%);
          background-repeat: no-repeat;

          margin-bottom: 1rem;
        }
      }
    }
  }

  .active {
    opacity: 1 !important;
    transition: all ease-in-out 0.2s;
    z-index: 2;

    position: fixed;
    right: 0;
  }

  .mobile-nav {
    position: fixed;
    width: 100%;
    bottom: 0;

    z-index: 3;

    background-color: white;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 1rem 2rem;
      gap: 3rem;
    }
  }

  .btn {
    min-width: 150px;
    padding: 1rem 0;

    text-align: center;
    border-radius: 5px;
    font-weight: bold;
  }

  .login {
    border: 1px solid ${primary};
    color: ${primary};
  }

  .signup {
    border: 1px solid ${primary};
    background-color: ${primary};
    color: white;
  }

  .mobile {
    position: sticky;
    top: 0;
    width: 100%;

    z-index: 999;
  }

  .divider{
    background-color: #ff00a8;
  }

  @media screen and (min-width: 768px) {
    .tablet-desktop {
      display: block;
    }

    .mobile-nav {
      display: none;
    }

    .mobile {
      display: none;
    }
  }
`

const Header = styled.header`
  z-index: 3;

  background-color: white;

  padding: 24px 10px;

  width: 100%;
  height: 85px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
      margin-right: 4rem;
    }

    img {
      max-width: 37.5px;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      gap: 1.5rem;
    }

    select {
      outline: none;
      padding: 0 1rem 0 0;

      background: url(${arrow}) no-repeat;

      background-size: 12px;
      background-position: calc(100%);
      background-repeat: no-repeat;
    }
  }

  .vertical {
    height: 2rem;
  }

  .auth-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .icon {
      object-fit: contain;
      height: 24px;
    }
  }

  .no-auth {
    display: flex;

    gap: 1rem;
  }

  @media screen and (min-width: 768px) {
    height: 105px;
  }
`

const Main = styled.main`
  width: 100%;
`

const data = [
  {
    name: 'Header.Blog',
    path: 'blog'
  },
  {
    name: 'Header.AboutUs',
    path: 'nosotros '
  }
]

const dataMobile = [
  {
    name: 'Blog',
    path: 'blog'
  },
  {
    name: 'Nosotros',
    path: 'nosotros '
  },
  {
    name: 'Regístrate',
    path: 'register'
  },
  {
    name: 'Iniciar sesión',
    path: 'login'
  }
]

const menuAnimation = () => {
  const menu = document.querySelector('.nav-menu')
  menu.classList.toggle('active')
}

export const LayoutDashboard = () => {
  const auth = useAppSelector((state) => state.auth.user)
  const { userLogout } = useAuth()

  // i18next function to translate
  const { i18n } = useTranslation()
  const handleLanguageSelect = (e) => {
    const selectedLanguage = e.target.value
    i18n.changeLanguage(selectedLanguage)
  }
  const { t } = useTranslation()

  return (
    <Layout>
        <div className='tablet-desktop'>
          <Header>
            <div className='logo'>
              <img alt='Howdy' src='/howdy-logo.svg' />
              <h2>Howdy</h2>

              <nav>
                <ul>
                  {data.map((data, index) => {
                    return (
                      <Link key={index} to={data.path}>
                        <li>{data.name}</li>
                      </Link>
                    )
                  })}
                  <select label='lang' onChange={handleLanguageSelect}>
                    <option value='es'>ES</option>
                    <option value='en'>EN</option>
                    <option value='pr'>PR</option>
                  </select>
                </ul>
              </nav>
            </div>

            {auth.status === 'authenticated'
              ? (
              <div className='auth-icons'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={userLogout}
                  sx={{ py: 1.5 }}
                >
                    <LogoutIcon />
                </Button>
                <img src={chat} className='icon' />
                <img src={saved} className='icon' />
                <img src={notifications} className='icon' />
                <Divider
                  orientation='vertical'
                  variant='middle'
                  className='vertical'
                />
                <Avatar alt='perfil' src={auth.user.photo ? auth.user.photo : profile} />
              </div>
                )
              : (
              <div className='no-auth'>
                <Link to='/auth/login' className='login btn'>{t('Header.LogIn')}</Link>
                <Link to='/auth/register' className='signup btn'>{t('Header.SignUp')}</Link>
                  Regístrate
                </Link>
              </div>
                )}
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
              <li>
                <select label='lang-mobile' onChange={handleLanguageSelect}>
                      <option value='es'>ES</option>
                      <option value='en'>EN</option>
                      <option value='pr'>PR</option>
                </select>
                <Divider className='divider' role='presentation' variant='fullWidth' />
              </li>
              {dataMobile.map((data, index) => {
                return (
                  <Link key={index} to={data.path}>
                    <li>{data.name}</li>
                    <Divider className='divider' role='presentation' variant='fullWidth' />
                  </Link>
                )
              })}
            </ul>
          </nav>
        </div>

      {auth.status === 'authenticated'
        ? (
        <nav className='mobile-nav'>
          <ul>
            <li>
              <img alt='Home' src={home} className='icon-mobile' />
            </li>
            <li>
              <img alt='Profile' src={profileMobile} className='icon-mobile' />
            </li>
            <li>
              <img alt='Saved' src={savedMobile} className='icon-mobile' />
            </li>
            <li>
              <Badge badgeContent={3} color='success'>
                <img alt='Chats' src={chatMobile} className='icon-mobile' />
              </Badge>
            </li>
          </ul>
        </nav>
          )
        : (
            ''
          )}

      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}

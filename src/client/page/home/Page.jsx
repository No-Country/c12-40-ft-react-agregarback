import React from 'react'
import { styled } from 'styled-components'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { primary, primary20, secondary120 } from '../../../common/variables'

import whatisbg from './img/bgimg2.png'
import { borderRadius } from '@mui/system'

const Header = styled.header`
  background: linear-gradient(to right, ${primary} 1%, ${secondary120});
  color: var(--white-opacity-100, #fff);
  display: flex;
  padding: 40px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const H1 = styled.h1`
  color: var(--white-opacity-100, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  font-weight: bold;
`

const H2 = styled.h2`
  color: var(--white-opacity-100, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`

const CustomButtonPri = styled(Button)`
  && {
    background-color: white;
    color: ${primary};
    border: 1px solid ${primary};
  }
`
const CustomButtonSec = styled(Button)`
  && {
    background-color: ${primary};
  }
`

const Container = styled.div`
  height: 433px;
  width: 100%;
  background-image: url(${whatisbg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LayoutWhite = styled.div`
  display: inline-flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #fcfcfc;
  margin: auto;

  div{
    width: 90%;
  }
`

const Title = styled.h3`
  font-size: 24px;
  color: #050505;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`

const Subtitle = styled.h4`
  font-size: 18px;
  color: #050505;
  font-family: Roboto;
  text-align: center;
  overflow-wrap: break-word;
`

const BoxGreen = styled.section`
  display: flex;
  width: 100%;
  padding: 24px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${secondary120};
`

const Box = styled.div`
  display: flex;
  width: 173px;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 8px;
  border-radius: 8px;
  background: #f5f8ec;
  color: var(--neutral-100, #050505);
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  div{
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: ${secondary120};
  }
`

const LayoutLang = styled.section`
  height: max-content;
  width: 100%;
  background: ${primary20};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const BoxLang = styled.div`
  display: flex;
  padding: 24px 16px;
  
  ul{
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  `
const CustomButtonLang = styled(Button)`
    && {
      background-color: #FFFFFF;
      color: ${primary};
      border-radius: 100px;
      
      &:hover{
        color: white;
        background-color: ${primary};
      }
    }
  `

const LayoutHowDoes = styled.section`
  height: max-content;

  div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 24px 0;
    gap: 16px;
    justify-content: center;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      div{
        height: 200px;
        background-color: ${primary20};
        border-radius: 8px;
      }
    }
  }
`

export const Page = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header>
        <H1>{t('Home.Header.Title')}</H1>

        <H2>
          {t('Home.Header.Subtitle')}
        </H2>

        <ButtonContainer>
          <CustomButtonPri variant='contained'>{t('Home.Header.Button.Register')}</CustomButtonPri>
          <CustomButtonSec variant='contained'>{t('Home.Header.Button.Login')}</CustomButtonSec>
        </ButtonContainer>
      </Header>
      <Container>
        <LayoutWhite>
          <div>
            <Title>{t('Home.Main.WhatIs.Title')}</Title>
            <Subtitle>
              {t('Home.Main.WhatIs.Subtitle')}
            </Subtitle>
          </div>
        </LayoutWhite>
      </Container>
      <Title>{t('Home.Main.WhyChoose.Title')}</Title>
      <BoxGreen>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose1')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose2')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose3')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose4')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose5')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose6')}</p>
        </Box>
        <Box>
          <div />
          <p>{t('Home.Main.WhyChoose.Choose7')}</p>
        </Box>
      </BoxGreen>
      <LayoutLang>
        <Title
          style={{
            borderBottom: `1px solid ${primary}`,
            width: '100%'
          }}
        >
          {t('Home.Main.LangAvailable.Title')}
        </Title>
        <BoxLang>
          <ul>
            <CustomButtonLang variant='contained'>Español</CustomButtonLang>
            <CustomButtonLang variant='contained'>Ingles</CustomButtonLang>
            <CustomButtonLang variant='contained'>Frances</CustomButtonLang>
            <CustomButtonLang variant='contained'>Portugues</CustomButtonLang>
            <CustomButtonLang variant='contained'>Aleman</CustomButtonLang>
            <CustomButtonLang variant='contained'>Italiano</CustomButtonLang>
            <CustomButtonLang variant='contained'>Y muchos mas</CustomButtonLang>
          </ul>
        </BoxLang>
      </LayoutLang>
      <LayoutHowDoes>
        <Title style={{
          borderBottom: `1px solid ${secondary120}`,
          width: '100%'
        }}
        >
          {t('Home.Main.HowDoes.Title')}
        </Title>
        <div>
          <div>
            <div>
              <CustomButtonSec
                variant='contained' style={{
                  padding: '10px 16px',
                  borderRadius: '8px'
                }}
              >
                {t('Login.Button.Register')}
              </CustomButtonSec>
            </div>
            <p>
              {t('Home.Main.HowDoes.Step1')}
            </p>
          </div>
        </div>
      </LayoutHowDoes>
    </>
  )
}

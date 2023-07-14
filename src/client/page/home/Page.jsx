import React from 'react'
import { styled } from 'styled-components'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

// const Nav = styled.nav`
//   background-color: white;
//   height: 50px;
// `

// const Menu = styled.ul`
//   height: inherit;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin: auto;
//   padding: 10px;
//   width: 100%;
// `

const Header = styled.header`
  background: var(
    --degrad-titulos,
    linear-gradient(260deg, #cae38c 0%, #a2cd37 20.5%, #c1358a 100%)
  );
  color: var(--white-opacity-100, #fff);
  display: flex;
  padding: 40px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const H1 = styled.h1`
  color: var(--white-opacity-100, #fff);
  font-family: Nunito Sans;
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

// const Bold = styled.span`
//   font-weight: bold;
// `

// const Button = styled.button`
//   display: flex;
//   cursor: pointer;
//   height: 48px;
//   padding: 10px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 4px;
//   color: ${(props) =>
//     (props.primary && 'var(--white-opacity-100, #fff)') ||
//     (props.secondary && 'var(--primary-100, #c32b8f)')};
//   border: ${(props) =>
//     (props.primary && 'none') ||
//     (props.secondary && '1.5px solid var(--primary-100, #c32b8f)')};
//   background: ${(props) =>
//     (props.primary && 'var(--primary-100, #c32b8f)') ||
//     (props.secondary && 'var(--white-opacity-100, #fff)')};
// `

const CustomButtonPri = styled(Button)`
  && {
    background-color: white;
    color: #c32b8f;
    border: 1px solid #c32b8f;
  }
`
const CustomButtonSec = styled(Button)`
  && {
    background-color: #c32b8f;
  }
`

const Container = styled.div`
  height: 70vh;
  width: 100vw;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h3`
  font-size: 24px;
  color: var(--neutral-100, #050505);
  font-family: Nunito Sans;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`

const Subtitle = styled.h4`
  font-size: 18px;
  color: var(--neutral-100, #050505);
  font-family: Roboto;
  text-align: center;
`

const LayoutWhite = styled.div`
  display: inline-flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--neutral-00, #fcfcfc);
  margin: auto;
`

const BoxGreen = styled.div`
  display: flex;
  width: 80vw;
  padding: 24px 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  background: var(--success-100, #a2cd37);
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
`

const LayoutLang = styled.section`
  height: max-content;
  width: 100vw;
  background: var(--primary-opacity-10, #f6e7f1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
          <Title>{t('Home.Main.WhatIs.Title')}</Title>
          <Subtitle>
            {t('Home.Main.WhatIs.Subtitle')}
          </Subtitle>
        </LayoutWhite>
      </Container>

      <Title>{t('Home.Main.WhyChoose.Title')}</Title>

      <BoxGreen>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose1')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose2')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose3')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose4')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose5')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose6')}</p>
        </Box>
        <Box>
          <div
            style={{
              borderRadius: '100%',
              width: '30px',
              height: '30px',
              backgroundColor: '#a2cd37'
            }}
          />
          <p>{t('Home.Main.WhyChoose.Choose7')}</p>
        </Box>
      </BoxGreen>

      <LayoutLang>
        <Title
          style={{
            borderBottom: '1px solid var(--primary-100, #c32b8f)',
            width: '100vw'
          }}
        >
          {t('Home.Main.LangAvailable.Title')}
        </Title>
      </LayoutLang>
    </>
  )
}

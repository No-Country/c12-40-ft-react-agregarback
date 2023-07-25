import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { styled } from 'styled-components'

import Banner from './components/Banner'
import { Page as DescriptionMobile } from './components/DescriptionMobile'
import { Page as Description } from './components/Description'
import { Page as Interests } from './components/Interests'
import { useParams } from 'react-router-dom'
import { db } from '../../../service/firebase'
import UploadPost from '../dashboard/models/UploadPost'
import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'
import { Achivements } from './components/Achivements'

const ContainerStyled = styled(ContainerGeneral)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 100px;

  @media screen and (min-width: 768px){
    .grid-container{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 1rem;
    }
    }
`

export const Page = () => {
  const [data, setData] = useState(null)
  const [desktop, setDesktop] = useState(window.innerWidth < 768)

  const updateDesktop = () => {
    setDesktop(window.innerWidth < 768)
  }

  const { id } = useParams()

  useEffect(() => {
    const handleGetData = async () => {
      const docRef = doc(db, 'profile', id)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    }

    const fetchData = async () => {
      const data = await handleGetData()
      setData(data)
    }

    fetchData()

    window.addEventListener('resize', updateDesktop)
    return () => window.removeEventListener('resize', updateDesktop)
  }, [])

  return (
    <ContainerStyled>
      <Banner data={data} className='banner' />

      <div className='grid-container'>
        <div>
          {
          desktop ? <DescriptionMobile data={data} /> : <Description data={data} />
        }
          <Interests data={data} />
        </div>
        <div>
          <UploadPost />
        </div>
        <div>
          <Achivements info={data} />
        </div>
      </div>
    </ContainerStyled>
  )
}

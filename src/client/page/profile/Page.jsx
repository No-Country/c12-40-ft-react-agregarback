import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { styled } from 'styled-components'

import Banner from './components/Banner'
import { Page as DescriptionMobile } from './components/DescriptionMobile'
import { Page as Description } from './components/Description'
import { Page as Interests } from './components/Interests'
import { useParams } from 'react-router-dom'
import { db } from '../../../service/firebase'
import { PublicComment } from '../dashboard/models/PublicComment'
import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'
import { Achivements } from './components/Achivements'

import { ModalPost } from '../dashboard/components/ModalPost'

const ContainerStyled = styled(ContainerGeneral)`

  @media screen and (min-width: 768px){
    .grid-container{
      display: grid;
      grid-template-columns: 0.75fr 1.5fr 0.75fr;
      grid-template-rows: auto;
      gap: 1rem;
    }
    }
`

export const Page = () => {
  const [data, setData] = useState(null)
  const [desktop, setDesktop] = useState(window.innerWidth < 768)
  const [modal, setModal] = useState(false)

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

  const handleCloseModal = () => {
    setModal(false)
  }

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
          <PublicComment setModal={setModal} />
        </div>
        <div>
          <Achivements info={data} />
        </div>
      </div>
      <ModalPost setModal={setModal} open={modal} close={handleCloseModal} />
    </ContainerStyled>
  )
}

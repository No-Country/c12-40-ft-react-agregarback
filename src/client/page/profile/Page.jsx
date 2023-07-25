import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import Banner from './components/Banner'
import { Page as DescriptionMobile } from './components/DescriptionMobile'
import { Page as Description } from './components/Description'
import { Page as Interests } from './components/Interests'
import { useParams } from 'react-router-dom'
import { db } from '../../../service/firebase'
import UploadPost from '../dashboard/models/UploadPost'
import { ContainerGeneral } from '../../../common/style/container/ContainerGeneral'
import { Achivements } from './components/Achivements'

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
    <ContainerGeneral>
      <Banner data={data} />
      {
        desktop ? <DescriptionMobile data={data} /> : <Description data={data} />
      }
      <Interests data={data} />
      <UploadPost />
      <Achivements info={data} />
    </ContainerGeneral>
  )
}

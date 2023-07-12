import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import Banner from './components/Banner'
import { Page as DescriptionMobile } from './components/DescriptionMobile'
import { useParams } from 'react-router-dom'
import { db } from '../../../service/firebase'

export const Page = () => {
  const [data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const handleGetData = async () => {
      const docRef = doc(db, 'users', id)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    }

    const fetchData = async () => {
      const data = await handleGetData()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <Banner data={data} />
      <DescriptionMobile />
    </>
  )
}

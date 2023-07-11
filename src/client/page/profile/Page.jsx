import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import Banner from './components/Banner'
import { useParams } from 'react-router-dom'
import { app } from '../../../service/firebase'

export const Page = () => {
  const [data, setData] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const handleGetData = async () => {
      const docRef = doc(app, 'users', id)
      const docSnap = await getDoc(docRef)
      console.log(docSnap.data())
      return docSnap.data()
    }

    setData(handleGetData())
  }, [])

  return <Banner data={data} />
}

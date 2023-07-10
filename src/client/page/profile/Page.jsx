import React from 'react'
import Banner from './components/Banner'

const data = {
  name: 'Luciana Guillermina',
  native: 'Español',
  learning: ['Inglés', 'Francés']
}

export const Page = () => {
  return (
    <Banner data={data} />
  )
}

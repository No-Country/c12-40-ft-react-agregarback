import React from 'react'
import Banner from './components/Banner'

const data = {
  name: 'Lucas Guillermina',
  img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  native: 'Español',
  learning: ['Inglés', 'Francés']
}

export const Page = () => {
  return (
    <Banner data={data} />
  )
}

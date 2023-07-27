import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit'
import { Divider } from '@mui/material'
import { useAppSelector } from '../../../../common/store/config'

import { primary, primary120, secondary120 } from '../../../../common/variables'
import profile from '../../dashboard/img/profile.svg'

import { LangBadge } from './LangBadge'
import { useTranslation } from 'react-i18next'

import { db } from '../../../../service/firebase'
import { getDoc, doc } from 'firebase/firestore'

const BannerStyled = styled.header`

  background: linear-gradient(180deg, #FFC0CB 40%, #ffffff 20%);

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  gap: 1rem;

  color: black;

  .person{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    width: 80%;
  }

  .person-img{
    max-width: 125px;
    
    aspect-ratio: 1/1;
    border-radius: 12px;

    
    img{
      border-radius: 12px;
      width: 100%;
      aspect-ratio: 1/1;
    }
    
  }

  .person-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .languages{
    display: flex;
    align-items: center;

    gap: 16px;
  }

  .edit-icon{
    padding: 0.5rem;

    border-radius: 10px;
    background-color: #F5F8EC;

    color: ${primary120};

    width: 32px;
    height: 32px;

    box-shadow: 0px 1px 3px 0px ${primary};
    -webkit-box-shadow: 0px 1px 3px 0px ${primary};
    -moz-box-shadow: 0px 1px 3px 0px ${primary};
  }

  .vertical{
    height: 2.5rem;
  }

  @media screen and (min-width: 768px){

    background: linear-gradient(180deg, #FFC0CB 50%, #ffffff 20%);

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .person{
      flex-direction: row;
      align-items: flex-end;

      gap: 2rem;
    }

    .person-info{
      align-items: flex-start;
    }

    .person-img{
      max-width: 200px;
    }
  }

  .native{
    background-color: #F5F8EC !important;
    border: 1px solid ${secondary120} !important;
  }

  .foraign{
    background-color: #F6E7F1 !important;
    border: 1px solid ${primary120} !important;
  }

  @media screen and (min-width: 1024px){
    .edit-icon{
      width: 36px;
      height: 36px;

      border-radius: 12px;
    }

    .person{
      gap: 4rem;
    }

    .person-img{
      max-width: 325px;
    }
  }
`

const Banner = ({ data, id }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const handleGetData = async () => {
      const docRef = doc(db, 'users', id)
      const docSnap = await getDoc(docRef)
      return docSnap.data()
    }

    const fetchData = async () => {
      const user = await handleGetData()
      setUser(user)
    }

    fetchData()
  }, [])

  const { t } = useTranslation()

  const auth = useAppSelector((state) => state.auth.user)

  console.log(auth)
  console.log(user)

  return (
    <BannerStyled>

      <div className='person'>

        <div className='person-img'>
          <img src={user?.photo ? user?.photo : profile} alt={user?.name} />
        </div>
        <div className='person-info'>
          {user?.name ? user?.name : 'John Doe'}
          <div className='languages'>
            <LangBadge label={t(data?.selectorLan.title)} variante='native' avatar={data?.selectorLan.photo} />
            <Divider orientation='vertical' variant='middle' className='vertical' />
            <LangBadge label={data?.selectorLanguage.title} variante='native' avatar={data?.selectorLanguage.photo} />
          </div>
        </div>
      </div>

      {
        auth.user.uid == id
          ? <div>
            <EditIcon className='edit-icon' />
          </div>
          : 'Perfil ajeno'
      }

    </BannerStyled>
  )
}

export default Banner

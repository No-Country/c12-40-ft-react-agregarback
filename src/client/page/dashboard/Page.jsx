import React from 'react'
import { SearchContained } from './components/SearchContained'
import { ContainedPost } from '../../../common/style/container/ContainedPost'
import { PublicComment } from './models/PublicComment'
import { TitleSeparator } from './components/TitleSeparator'
import { useAppSelector } from '../../../common/store/config'

export const Page = () => {
  const uid = useAppSelector(state => state.auth.user.user.uid)

  console.log(uid)

  return (
    <ContainedPost>
      <SearchContained />
      <TitleSeparator>
        Personas que podrían interesarte
      </TitleSeparator>
      <PublicComment />
    </ContainedPost>
  )
}

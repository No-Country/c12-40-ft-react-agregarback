import React from 'react'
import { SearchContained } from './components/SearchContained'
import { ContainedPost } from '../../../common/style/container/ContainedPost'
import { PublicComment } from './models/PublicComment'
import { TitleSeparator } from './components/TitleSeparator'

export const Page = () => {
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

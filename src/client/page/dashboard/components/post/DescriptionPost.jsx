import React, { useState } from 'react'

import { styled } from 'styled-components'

const Paragraph = styled.p`
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    .btn{
      display: inline-block;
      align-self: flex-end;
      cursor: pointer;
    }
`

export const DescriptionPost = ({ description }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <Paragraph>
      {showMore ? description : `${description.substring(0, 100)}...`}
      <span className='btn' onClick={() => setShowMore(!showMore)}>{showMore ? ' ...ver menos' : ' ...ver más'}</span>
    </Paragraph>
  )
}

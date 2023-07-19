import React from 'react'

import { styled } from 'styled-components'

import SearchIcon from '@mui/icons-material/Search'
import { primary10, primary80 } from '../../../../common/variables'

const SearchContainer = styled.div`
  
  .searchForm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    margin: 4px;
    border-radius: 100px;
    background-color: ${primary10};

    input {
      border: none;
      outline: none;
      width: 100%;
      padding-left: 16px;

      &::placeholder{}
    }

    span {
      color: ${primary80};
    }
  }
`

const Search = () => {
  return (
    <SearchContainer>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Search'
        />
        <span><SearchIcon /></span>
      </div>
    </SearchContainer>
  )
}

export default Search

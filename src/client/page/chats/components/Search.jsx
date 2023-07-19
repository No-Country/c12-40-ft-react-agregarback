import React from 'react'

import { styled } from 'styled-components'

const SearchContainer = styled.div`
  border: 1px solid wheat;
  
  .searchForm {
    padding: 10px;

    input {
      background-color: transparent;
      border: none;
      color: white;
      outline: none;

      &::placeholder{
        color: lightgray;
      }
    }
  }
`

const Search = () => {
  return (
    <SearchContainer>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Encuentra un usuario'
        />
        <div className='userChat'>
          <img src='' alt='' />
          <div className='userChatInfo'>
            <span>hola</span>
          </div>
        </div>
        <button>Search</button>
      </div>
    </SearchContainer>
  )
}

export default Search

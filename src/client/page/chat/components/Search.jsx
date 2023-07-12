import React from 'react'
import { styled } from 'styled-components'

const SearchSect = styled.div`
  border: 1px solid wheat;
`

const SearchForm = styled.div`
padding: 10px;

  input{
    background-color: transparent;
    border: none;
    color: white;
    outline: none;

    &::placeholder{
      color: lightgray;
    }
  }
`

const Search = () => {
  return (
    <SearchSect>
      <SearchForm>
        <input type='text' />
      </SearchForm>

    </SearchSect>
  )
}

export default Search

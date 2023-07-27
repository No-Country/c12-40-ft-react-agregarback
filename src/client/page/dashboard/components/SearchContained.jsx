import { styled, alpha, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import React from 'react'
import { useTranslation } from 'react-i18next'

export const SearchContained = () => {
  const { t } = useTranslation()

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '2rem',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: '391px!important',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '42px',
    width: '351px!important',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '391px!important',
      [theme.breakpoints.up('sm')]: {
        width: '351px',
        '&:focus': {
          width: '351px'
        }
      }
    }
  }))

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={t('HomeLog.Search')}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

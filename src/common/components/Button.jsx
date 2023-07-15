import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: red;
`

export const Button = ({ click }) => {
  return (
    <ButtonStyle type='button' onClick={click}>button</ButtonStyle>
  )
}

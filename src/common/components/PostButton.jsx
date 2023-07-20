import styled from 'styled-components'

const ButtonStyle = styled.button`
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
  font-weight: bold;
  font-size: 0.6rem;
  padding: 0.375rem 1rem 0.375rem 0.5rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  img{
    width: 1.5rem;
    height: 1.5rem;
  }
  

  @media screen and (min-width: 768px){
    font-size: 0.875rem;
  }
`

export const PostButton = ({ click, label, icon }) => {
  return (
    <ButtonStyle type='button' onClick={click}>
      <img src={icon} alt='btn' />
      {label}
    </ButtonStyle>
  )
}

import Message from './Message'
import { styled } from 'styled-components'

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background-color: #f6f7d3fc;
  padding: 20px;
  height: 70vh;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #c2e9fb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c70e7a;
    border-radius: 4px;
  }

  scrollbar-color: #59a3cc #c2e9fb;
`

const Messages = ({ messages }) => {
  return (
    <MessagesContainer>
      {messages?.map((m) => (
        <Message
          message={m} key={m.id}
        />
      ))}
    </MessagesContainer>
  )
}

export default Messages

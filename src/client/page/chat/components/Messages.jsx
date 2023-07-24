import Message from './Message'
import { styled } from 'styled-components'

const MessagesContainer = styled.div`
  background-color: white;
  padding: 10px;
  height: 70vh;
  overflow-y: auto;
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

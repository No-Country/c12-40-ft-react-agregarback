import React from 'react'
import Message from './Message'
import { styled } from 'styled-components'

const MessagesSect = styled.div`
    background-color: #ddddf7;
    padding: 10px;
    height: calc(100% - 100px);
`

const Messages = () => {
    return (
        <MessagesSect>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </MessagesSect>
    )
}

export default Messages
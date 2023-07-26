import React, { useEffect, useState } from 'react'

import { styled } from 'styled-components'

import Messages from './components/Messages'

import dotsVertical from '../chats/img/dotsVertical.png'
import { neutral10 } from '../../../common/variables'
import Inputs from './components/Inputs'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../service/firebase'
import { useAppSelector } from '../../../common/store/config'
import { Avatar } from '@mui/material'

const ChatContainer = styled.div`
    flex: 3;
    border-radius: 0 8px 8px 0;
    overflow: hidden;

    .navbar {
        height: 64px;
        background-color: ${neutral10};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

        .user {
            display: flex;
            align-items: center;
            gap: 10px;

            .userImg {
                position: relative;
                padding: 10px 0;
                height: 100%;

                img {
                    position: relative;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: contain;
                }

                .whiteNote {
                    position: absolute;
                    left: calc(50% - 5px);
                    bottom: 10px;
                    width: 10px;
                    height: 10px;
                    padding: 1px;
                    background-color: white;
                    border-radius: 50%;
                }
                .greenNoti {
                    position: absolute;
                    left: calc(50% - 2.5px);
                    bottom: 7px;
                    width: 6px;
                    height: 6px;
                    padding: 1px;
                    background-color: greenyellow;
                    border-radius: 50%;
                }
            }
        }

        .navMenu {
            width: 25px;
            height: 25px;
            padding: 3px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 3px 3px 10px -5px black;
            cursor: pointer;
        }
    }
`

export const Page = () => {
  const { chat } = useParams()
  const [messages, setMessages] = useState([])
  const userFriend = useAppSelector(state => state.client.chat.friend)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'chats', chat), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  }, [chat])

  return (
    <ChatContainer>
      <div className='navbar'>
        <div className='user'>
          <div className='userImg'>
            <Avatar src={userFriend.photo} alt={userFriend.name} />
            <span className='greenNoti' />
            <span className='whiteNoti' />
          </div>

          <div className='userName'>
            <span>{userFriend.name}</span>
          </div>
        </div>
        <div className='navMenu'>
          <img src={dotsVertical} alt='' />
        </div>

      </div>
      <Messages messages={messages} />
      <Inputs roomId={chat} />
    </ChatContainer>
  )
}

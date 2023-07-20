import React from 'react'

import { styled } from 'styled-components'

import Messages from './components/Messages'

import howdy from '../chats/img/24.png'
import dotsVertical from '../chats/img/dotsVertical.png'
import { neutral10 } from '../../../common/variables'
import Inputs from './components/Inputs'
import { useParams } from 'react-router-dom'

const ChatContainer = styled.div`
    flex: 3;
    border-radius: 0 8px 8px 0;

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

  return (
    <ChatContainer>
      <div className='navbar'>
        <div className='user'>
          <div className='userImg'>
            <img src={howdy} alt='' />
            <span className='greenNoti' />
            <span className='whiteNoti' />
          </div>

          <div className='userName'>
            <span>Gimena</span>
          </div>
        </div>
        <div className='navMenu'>
          <img src={dotsVertical} alt='' />
        </div>

      </div>
      <Messages roomId={chat} />
      <Inputs roomId={chat} />
    </ChatContainer>
  )
}

import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { primary, secondary120 } from '../../../../common/variables'
import { db } from '../../../../service/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ChatIndContainer = styled(Button)`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${primary};  
        color: white;
        border-radius: 8px;
    }

    .userImg {
        position: relative;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: contain;
        }

        .whiteNote {
            position: absolute;
            left: calc(50% - 5px);
            bottom: 2px;
            width: 10px;
            height: 10px;
            padding: 1px;
            background-color: white;
            border-radius: 50%;
        }
        .greenNoti {
            position: absolute;
            left: calc(50% - 2.5px);
            bottom: 2px;
            width: 6px;
            height: 6px;
            padding: 1px;
            background-color: greenyellow;
            border-radius: 50%;
        }
    }

    

    .chatInfo {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .userChatInfo {
                span {
                    font-size: 18px;
                    font-weight: 500;
                }
                p {
                    font-size: 14px;
                    color: lightgray;
                }
            }

        .timenoti {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;

            span:nth-child(2) {
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 50%;
                background-color: ${secondary120};
                color: white;
            }
        }
    }
`

export const ChatInd = ({ id, name, roomId }) => {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    const profileUser = async () => {
      const docRef = doc(db, 'profile', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProfile(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!')
      }
    }

    profileUser()
  }, [])

  return (
    <ChatIndContainer color='secondary' to={`${roomId}`} component={Link}>
      <div className='userImg'>
        <Avatar src={profile?.photo ? profile?.photo : null} />
        <span className='greenNoti' />
        <span className='whiteNoti' />
      </div>
      <div className='chatInfo'>
        <div className='userChatInfo'>
          <span>{name}</span>
          <p>Ultimo mensaje</p>
        </div>
        <div className='timenoti'>
          <span>1 min</span>
          <span>2</span>
        </div>
      </div>

    </ChatIndContainer>
  )
}

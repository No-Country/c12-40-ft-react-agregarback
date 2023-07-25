import { styled } from 'styled-components'
import { secondary120 } from '../../../../common/variables'
import { Avatar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../../common/store/config'
import { userFriendSelect } from '../../../store/slice/sliceChat'

const ChatIndContainer = styled(Button)`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: #83838334!important;
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

export const ChatInd = ({ data }) => {
  const dispatch = useAppDispatch()

  const handleClick = (user) => {
    dispatch(userFriendSelect(user))
  }

  return (
    <ChatIndContainer color='secondary' to={`${data[0]}`} onClick={() => handleClick(data[1]?.userInfo)} component={Link}>
      <div className='userImg'>
        <Avatar src={data[1]?.userInfo?.photoURL ? data[1]?.userInfo?.photoURL : null} />
        <span className='greenNoti' />
        <span className='whiteNoti' />
      </div>
      <div className='chatInfo'>
        <div className='userChatInfo'>
          <span>{data[1]?.userInfo?.displayName ? data[1]?.userInfo?.displayName : null}</span>
          <p>{data[1]?.lastMessage?.text}</p>
        </div>
      </div>

    </ChatIndContainer>
  )
}

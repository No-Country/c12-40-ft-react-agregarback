import { Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../../common/store/config'
import { userFriendSelect } from '../../../store/slice/sliceChat'
import { ChatIndContainer } from '../style/ChatInd.style'
import { truncateText } from '../../../helpers/truncateText'
import { formatDate } from '../../../helpers/formDate'

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
          <Typography variant='body2'>{truncateText(data[1]?.lastMessage?.text, 25)}</Typography>
          <Typography variant='body2' sx={{ textAlign: 'end' }}>{formatDate(data[1]?.date?.seconds, data[1]?.date?.nanoseconds)}</Typography>
        </div>
      </div>

    </ChatIndContainer>
  )
}

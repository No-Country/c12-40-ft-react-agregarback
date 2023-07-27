import { Box, Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { useAppSelector } from '../../../../common/store/config'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'

import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { db } from '../../../../service/firebase'
import { useTranslation } from 'react-i18next'

const InputsSect = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid gray;

  input{
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 18px;
    color: #2f2d52;

    &::placeholder{
      color: lightgray;
    }
  }
`

const Inputs = ({ roomId }) => {
  const { t } = useTranslation()

  const uid = useAppSelector(state => state.auth.user.user.uid)
  const uidFriend = useAppSelector(state => state.client.chat.friend.uid)
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm({ mode: 'all' })

  const eventSubmit = async (data) => {
    const storage = getStorage()
    setLoading(true)

    try {
      if (selectedFile) {
        const filename = `${uid}-${selectedFile.name}-${crypto.randomUUID()}`
        const storageRef = ref(storage, `images/${filename}`)
        await uploadBytes(storageRef, selectedFile)
        const downloadURL = await getDownloadURL(storageRef)

        await updateDoc(doc(db, 'chats', roomId), {
          messages: arrayUnion({
            id: crypto.randomUUID(),
            text: data.message,
            senderId: uid,
            date: Timestamp.now(),
            img: downloadURL
          })
        })
      } else {
        if (data.message !== '') {
          await updateDoc(doc(db, 'chats', roomId), {
            messages: arrayUnion({
              id: crypto.randomUUID(),
              text: data.message,
              senderId: uid,
              date: Timestamp.now()
            })
          })
        }
      }

      await updateDoc(doc(db, 'userChats', uid), {
        [roomId + '.lastMessage']: {
          text: data.message
        },
        [roomId + '.date']: serverTimestamp()
      })

      await updateDoc(doc(db, 'userChats', uidFriend), {
        [roomId + '.lastMessage']: {
          text: data.message
        },
        [roomId + '.date']: serverTimestamp()
      })

      setSelectedFile(null)
      reset()
    } catch (error) {
      console.error('Error al agregar el mensaje:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    setValue('file', file)
  }

  return (
    <form onSubmit={handleSubmit(eventSubmit)}>
      <InputsSect>
        <div style={{ marginBottom: '10px' }}>
          {selectedFile && (
            <div>
              <p>{t('Chat.Inputs.Img')}</p>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt='Vista previa'
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

        <input
          maxLength={200}
          type='text'
          name='message'
          {...register('message')}
          placeholder='Escribe aqui...'
        />
        <Box sx={{ display: 'flex' }}>
          <input
            type='file'
            style={{ display: 'none' }}
            id='file'
            onChange={handleFileChange}
            name='file'
          />
          <label htmlFor='file' style={{ cursor: 'pointer' }}>
            <AttachFileIcon />
          </label>
        </Box>
        <Button
          disabled={loading}
          variant='contained'
          color='secondary'
          type='submit'
        >
          {
            loading ? <CircularProgress size={24} color='secondary' /> : <SendIcon />
          }
        </Button>
      </InputsSect>
    </form>
  )
}

export default Inputs

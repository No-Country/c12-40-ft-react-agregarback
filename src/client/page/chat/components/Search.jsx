import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from '@firebase/firestore'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { db } from '../../../../service/firebase'
import { useAuthStore } from '../store/useAuthStore'

const SearchSect = styled.div`
  border: 1px solid wheat;
`

const SearchForm = styled.div`
padding: 10px;

  input{
    background-color: transparent;
    border: none;
    color: white;
    outline: none;

    &::placeholder{
      color: lightgray;
    }
  }
`

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useAuthStore()

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    )

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'chats', combinedId))

      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        // create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
      }
    } catch (err) {}

    setUser(null)
    setUsername('')
  }

  return (
    <SearchSect>
      <SearchForm>
        <input type='text' placeholder='Encuentra un usuario' onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKey} value={username} />
        {err && <span>Usuario no encontrado!</span>}
        {user && (
          <div className='userChat' onClick={handleSelect}>
            <img src={user.photoURL} alt='' />
            <div>
              <span>{user.displayName}</span>
            </div>
          </div>
        )}
        <button onClick={handleSearch}>Search</button>
      </SearchForm>

    </SearchSect>
  )
}

export default Search

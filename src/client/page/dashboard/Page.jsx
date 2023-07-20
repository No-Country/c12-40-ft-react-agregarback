import React, { useState, useEffect } from 'react'
import { SearchContained } from './components/SearchContained'
import { ContainedPost } from '../../../common/style/container/ContainedPost'
import { TitleSeparator } from './components/TitleSeparator'
// import { useAppSelector } from '../../../common/store/config'
import { Post } from './models/Post'
import { PublicComment } from './models/PublicComment'
import { ModalPost } from './components/ModalPost'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../../service/firebase'

export const Page = () => {
  // const uid = useAppSelector(state => state.auth.user.user.uid)

  const [modal, setModal] = useState(false)
  const [post, setPost] = useState(null)

  useEffect(() => {
    const q = query(
      collection(db, 'comment'),
      where('lanLearning', '==', 'english')
    )
    onSnapshot(q, (querySnapshot) => {
      const comments = []
      querySnapshot.forEach((doc) => {
        comments.push(doc.data())
      })
      setPost(() => comments)
    })
  }, [post])

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <ContainedPost>
      <SearchContained />
      <PublicComment setModal={setModal} />
      <TitleSeparator>Personas que podrían interesarte</TitleSeparator>
      {post.map((e) => (
        <Post
          key={e?.idUser}
          name={e?.name}
          description={e?.selectComment}
          photo={e?.photo}
        />
      ))}
      <ModalPost setModal={setModal} open={modal} close={handleCloseModal} />
    </ContainedPost>
  )
}

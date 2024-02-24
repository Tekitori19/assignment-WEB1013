import React from 'react'
import styles from './SingleContent.module.css'
import { useURLContext } from '../../providers/UrlProvider'
import { useParams } from 'react-router-dom'

const SingleContent = () => {
  const { postId } = useParams()
  const { datas } = useURLContext()
  document.title = `Bài đăng ${parseInt(postId) + 1}`


  return (
    <div className={styles.content}>
      {datas && datas[parseInt(postId)] && (
        <>
          <img src={datas[parseInt(postId)].url} alt="" />
          <h2>{datas[parseInt(postId)].title}</h2>
          <p className={styles.tacGia}>Tác giả: <strong>{datas[parseInt(postId)].author}</strong></p>
          <span className={styles.time}>{datas[parseInt(postId)].date}</span>
          <p>
            {datas[parseInt(postId)].content}
          </p>
          <div className={styles.iconContainer}>
            <i className={styles.likeIcon + " fa-regular fa-thumbs-up"}></i>
            <i className={styles.dislikeIcon + " fa-regular fa-thumbs-down"}></i>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleContent


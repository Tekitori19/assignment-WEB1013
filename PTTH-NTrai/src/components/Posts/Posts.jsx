import Post from '../Post/Post'
import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.container}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  )
}

export default Posts
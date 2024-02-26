import Post from '../Post/Post'
import styles from './Posts.module.css'
import { useURLContext } from "../../providers/UrlProvider";

const Posts = () => {
  
  const {datas} = useURLContext()

  return (
    // <UrlProvider>
      <div className={styles.container}>
        {
          datas.map(
            u => <Post 
            key={u.id} 
            postId={u.id} 
            url={u.url}
            title = {u.title}
            content = {u.content} 
            date = {u.date}
            tags = {u.tags}
            />)
        }
      </div>
    // </UrlProvider>
  )
}



export default Posts
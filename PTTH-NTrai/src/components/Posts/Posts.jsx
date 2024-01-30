import Post from '../Post/Post'
import styles from './Posts.module.css'
import { useURLContext } from "../../providers/UrlProvider";
import UrlProvider from '../../providers/UrlProvider';

const Posts = () => {
  
  const {urls} = useURLContext()

  return (
    // <UrlProvider>
      <div className={styles.container}>
        {urls.map(u => <Post key={u.id} postId={u.id} url={u.url}></Post>)}
      </div>
    // </UrlProvider>
  )
}



export default Posts
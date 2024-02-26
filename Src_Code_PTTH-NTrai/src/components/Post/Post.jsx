import styles from "./Post.module.css"
import { Link } from "react-router-dom";

const Post = ({postId, url, title, content, date, tags}) => {
  const contentLimit = 100

  return (
    <Link to={`post/${postId}`} className={styles.card}>
    <img src={url}
         alt="" />
         {
          tags.map( tag => <span className={styles.postCat}>{tag}</span> )
         }
        <h2>{title}</h2>
        <span className={styles.postTime}>{date}</span>
        <p>
            {
              content.length > contentLimit ?
              `${content.substring(0, contentLimit)}...`: content 
            }
        </p>
    </Link>
  )
}

export default Post
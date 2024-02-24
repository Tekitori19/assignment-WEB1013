import styles from "./Post.module.css"
import { Link } from "react-router-dom";

const Post = ({postId, url, title, content, date}) => {
  const contentLimit = 100

  return (
    <Link to={`post/${postId}`} className={styles.card}>
    <img src={url}
    // "https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
         alt="" />
         <span className={styles.postCat}>Toán</span>
         <span className={styles.postCat}>Lí</span>
        <h2>{title}</h2>
        <span className={styles.postTime}>{date}</span>
        <p>
            {/* Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Fugiat excepturi, esse
            deserunt sapiente eum soluta nesciunt odit 
            nostrum mollitia rem. */}
            {
              content.length > contentLimit ?
              `${content.substring(0, contentLimit)}...`: content 
            }
        </p>
    </Link>
  )
}

export default Post
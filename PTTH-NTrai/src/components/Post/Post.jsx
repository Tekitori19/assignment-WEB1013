import styles from "./Post.module.css"

const Post = () => {
  return (
    <div className={styles.card}>
        <img src="https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
         alt="" />
         <span className={styles.postCat}>Toán</span>
         <span className={styles.postCat}>Lí</span>
        <h2>Bài đăng 1</h2>
        <span className={styles.postTime}>1 giờ trước</span>
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Fugiat excepturi, esse
            deserunt sapiente eum soluta nesciunt odit 
            nostrum mollitia rem.</p>
    </div>
  )
}

export default Post
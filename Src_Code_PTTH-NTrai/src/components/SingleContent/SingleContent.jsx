import React from 'react'
import styles from './SingleContent.module.css'
import {useURLContext} from '../../providers/UrlProvider'
import { useParams } from 'react-router-dom'

const SingleContent = () => {
  const {postId} = useParams()
  const {urls} = useURLContext()
  document.title = `Bài đăng ${postId+1}`

  return ( 
    <div className={styles.content}>
            <img src={ urls ? urls[postId].url : pic}
            alt="" />
            <h2>
               Bài đăng {+postId + 1}: Lorem ipsum dolor sit amet.
            </h2>
                
            <p className={styles.tacGia}>Tác giả: <strong>Bộ giáo dục và đào tạo</strong></p>
            
            <span className={styles.time}>1 giờ trước</span>
            
            <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti beatae eos hic!
                Facilis error suscipit sit voluptas nulla. 
                Repellendus tempora fuga ullam aut quo. Quas 
                a aspernatur illo, ullam similique non fugit 
                explicabo nihil? Quis at consequuntur delectus, 
                aperiam laborum sit nobis nostrum! Eius tenetur 
                blanditiis exercitationem quasi id laboriosam!
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti beatae eos hic!
                Facilis error suscipit sit voluptas nulla. 
                Repellendus tempora fuga ullam aut quo. Quas 
                a aspernatur illo, ullam similique non fugit 
                explicabo nihil? Quis at consequuntur delectus, 
                aperiam laborum sit nobis nostrum! Eius tenetur 
                blanditiis exercitationem quasi id laboriosam!
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti beatae eos hic!
                Facilis error suscipit sit voluptas nulla. 
                Repellendus tempora fuga ullam aut quo. Quas 
                a aspernatur illo, ullam similique non fugit 
                explicabo nihil? Quis at consequuntur delectus, 
                aperiam laborum sit nobis nostrum! Eius tenetur 
                blanditiis exercitationem quasi id laboriosam!
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti beatae eos hic!
                Facilis error suscipit sit voluptas nulla. 
                Repellendus tempora fuga ullam aut quo. Quas 
                a aspernatur illo, ullam similique non fugit 
                explicabo nihil? Quis at consequuntur delectus, 
                aperiam laborum sit nobis nostrum! Eius tenetur 
                blanditiis exercitationem quasi id laboriosam!
            </p>
        <div className={styles.iconContainer}>
            <i className={styles.likeIcon + " fa-regular fa-thumbs-up"}></i>
            <i className={styles.dislikeIcon + " fa-regular fa-thumbs-down"}></i>
        </div>
    </div>
  )
}

export default SingleContent
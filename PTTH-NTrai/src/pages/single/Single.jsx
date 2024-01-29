import SideBar from "../../components/SideBar/SideBar"
import styles from "./Single.module.css"
import pic from "/src/assets/PXL_20231213_162538748.jpg"
import { useParams } from "react-router-dom";


const Single = () => {
  const {postId} = useParams();

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img src={pic}
            alt="" />
            <h2>
               Bài đăng {postId}: Lorem ipsum dolor sit amet.
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
    <SideBar></SideBar>
    </div>
  )
}

export default Single
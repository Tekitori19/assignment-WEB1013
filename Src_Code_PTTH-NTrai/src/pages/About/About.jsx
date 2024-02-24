import styles from "./About.module.css"
import SideBar from "../../components/SideBar/SideBar"

const About = () => {
  document.title ="Giới thiệu"
  return (
    <div>
      <div className={styles.container}>
          <h1>
              Giới thiệu về trường Nguyễn Trãi
          </h1>
          <p>
          Trường Trung học Phổ thông Nguyễn Trãi, thành lập hơn 40 năm, 
          tự hào đạt chuẩn quốc gia về chất lượng đầu ra tốt. Với đội ngũ giáo viên 
          chất lượng và cơ sở vật chất hiện đại, trường cam kết mang đến cho học sinh 
          một môi trường học tập tích cực và đầy tiềm năng để phát triển.
          </p>
      </div>
      <SideBar></SideBar>
    </div>
  )
}

export default About
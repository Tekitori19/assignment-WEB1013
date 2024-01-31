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
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Aut placeat ullam illo
              nobis. Doloribus ratione inventore iure rem
              eaque. Fuga similique, ipsam reiciendis sequi
              aperiam, suscipit illo amet, aut minima quidem
              quaerat officiis dicta! Nostrum nam repellendus
              itaque sunt consectetur veritatis voluptatibus
              asperiores ea, eaque hic vitae nobis earum totam.
          </p>
      </div>
      <SideBar></SideBar>
    </div>
  )
}

export default About
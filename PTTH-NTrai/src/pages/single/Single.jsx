import SideBar from "../../components/SideBar/SideBar"
import styles from "./Single.module.css"
import UrlProvider from "../../providers/UrlProvider"
import SingleContent from "../../components/SingleContent/SingleContent"

const Single = () => {

  return (
    <div className={styles.container}>
        <UrlProvider>
          <SingleContent/>
        </UrlProvider>
        <SideBar/>
    </div>
  )
}

export default Single
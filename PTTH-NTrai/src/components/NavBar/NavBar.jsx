import styles from './NavBar.module.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

const navItems = ["Trang chủ", "Liên hệ", "Góp ý", "Hỏi đáp", "Giới thiệu"]
const linkItems = {
  "Trang chủ": "/",
  "Liên hệ": "/contact",
  "Hỏi đáp": "/faq",
  "Giới thiệu": "/about",

}
    
const NavBar = () => {
  const [active, setActive] = useState("Trang chủ")

  return (
    <nav className={styles.container}>

      <img className={styles.headerLogo}
        src="https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain" 
        alt="Logo"
      />

      <ul className={styles.headerList}>
        {
          navItems.map(item =>
           <Link to={linkItems[item]} key={item} className={styles.link}>
             <li
              className={styles.headerListItem + `${active === item ? " " + styles.active : "" }`}
              onClick={()=> {
                console.log(linkItems);
                setActive(item)
              }}
              >
                 {item}
              </li>
           </Link>
          )
        }
      </ul>
      
      <div className={styles.headerRight}>
        <img className={styles.userIcon}
          src="https://th.bing.com/th/id/OIP.CjRitGCD6l29jagExY17ggHaE8?rs=1&pid=ImgDetMain"
          alt="User"
          title='Đăng nhập'
          />
        <i className={styles.searchIcon + " fa-solid fa-magnifying-glass"}></i>
      </div>
    </nav>
  )
}

export default NavBar
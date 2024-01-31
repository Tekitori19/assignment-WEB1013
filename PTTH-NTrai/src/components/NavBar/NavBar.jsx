import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const navItems = ["Trang chủ", "Liên hệ", "Góp ý", "Hỏi đáp", "Giới thiệu"]
const linkItems = {
  "Trang chủ": "/",
  "Liên hệ": "/contact",
  "Góp ý": "/feedback",
  "Hỏi đáp": "/faq",
  "Giới thiệu": "/about",
}

const NavBar = () => {
  return (
    <nav className={styles.container}>

      <img className={styles.headerLogo}
        src="https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain" 
        alt="Logo"
      />

      <ul className={styles.headerList}>
        {
          navItems.map(item =>
           <NavLink 
            to={linkItems[item]}
            key={item}
            className={({isActive}) =>
                isActive ?
                  `${styles.link} ${styles.active}`:
                  `${styles.link}`
          }
          >
             <li
              className={styles.headerListItem }
              // onClick={()=> {
              //   currentState.state = item
              //   setActive(item)
              // }}
              >
                 {item}
              </li>
           </NavLink>
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
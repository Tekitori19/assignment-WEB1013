import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.container}>

      <img className={styles.headerLogo}
        src="https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain" 
        alt="Logo"
      />

      <ul className={styles.headerList}>
        <li className={styles.headerListItem}>Trang chủ</li>
        <li className={styles.headerListItem}>Liên hệ</li>
        <li className={styles.headerListItem}>Góp ý</li>
        <li className={styles.headerListItem}>Hỏi đáp</li>
        <li className={styles.headerListItem}>Giới thiệu</li>
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
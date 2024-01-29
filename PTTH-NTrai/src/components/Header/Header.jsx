import React from 'react'
import styles from './Header.module.css'
import pic from '../../assets/truong.jpg'

const Header = () => {
  return (
    <header>
        <p className={styles.smallTitle}>Trường THPT</p>
        <p className={styles.largerTitle}>Nguyễn Trãi</p>
        <img className={styles.img}
         src={pic}
        //  "https://th.bing.com/th/id/R.68f10133a2ead1677708ce70de80a711?rik=4eMFwKpcx6g6Sw&pid=ImgRaw&r=0"
          alt=""/>
    </header>
  )
}

export default Header
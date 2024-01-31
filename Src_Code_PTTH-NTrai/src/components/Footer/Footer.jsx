import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLogo}>
            <img 
               src="https://th.bing.com/th/id/OIP.ipYPOsuyVnH8BfG-N70g0QHaE8?w=600&h=400&rs=1&pid=ImgDetMain" 
               alt="Logo"
            />
            <p>
             Số 137 Nguyễn Thị Thập, Phường Hòa Minh, Quận Liên Chiểu, TP. Đà Nẵng.
            </p>
        </div>
        <div className={styles.footerContact}>
            <h3>
                Thông tin liên hệ
            </h3>
            <p> Số điện thoại liên hệ giải đáp ý kiến sinh viên: <strong>0904565885</strong></p>
            <p>Địa chỉ email các phòng ban:</p>
            <ul>
                <li>
                    <p>
                    Phòng dịch vụ sinh viên: <strong>dvsvpoly.dn@poly.edu.vn</strong>
                    </p>
                </li>
                <li>
                    <p>Phòng Tổ chức và quản lý đào tạo:</p>
                    <ul>
                        <li><strong>Đào tạo: tronglt@fe.edu.vn</strong></li>
                        <li><strong>Khảo thí: tronglt@fe.edu.vn</strong></li>
                    </ul>
                </li>
                <li>Phòng hành chính: <strong>phuonghtk11@fe.edu.vn</strong></li>
                <li>Phòng quan hệ doanh nghiệp: <strong>qhdn.fpolydn@fpt.edu.vn</strong></li>
            </ul>
            <p>
            Ý kiến đóng góp chung gửi về ykien.poly@fpt.edu.vn bằng email @fpt.edu.vn
            </p>
        </div>
    </footer>
  )
}

export default Footer
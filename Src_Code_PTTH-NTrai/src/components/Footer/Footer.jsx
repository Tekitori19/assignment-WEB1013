import styles from './Footer.module.css'
import pic from '../../assets/LOGO_Truong.jpg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLogo}>
            {/* <img 
               src={pic} 
               alt="Logo"
            /> */}
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.254729970705!2d108.16609980991045!3d16.052265939829297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142196d9a203685%3A0x4e8027fe58d65525!2zQ2FvIMSR4bqzbmcgRlBUIEPGoSBT4bufIDI!5e0!3m2!1svi!2s!4v1708398705957!5m2!1svi!2s" 
            width="400" 
            height="300" style={{border:0 + 'px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
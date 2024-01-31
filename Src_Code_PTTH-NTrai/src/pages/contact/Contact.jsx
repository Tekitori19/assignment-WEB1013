import styles from './Contact.module.css'

const Contact = () => {
  document.title = "Liên hệ"
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Thông tin liên hệ</h1>
            <p>Cảm ơn bạn đã ghé thăm trang web của chúng tôi. 
                Nếu bạn có phản hồi về bất kỳ trang nào trên
                www.NguyenTrai.edu vui lòng sử dụng biểu mẫu 
                phản hồi bên phần góp ý.
            </p>
            <p>Đối với các câu hỏi chung khác,
            Gọi 09******** hoặc đến địa chỉ:
            </p>
            <p>
            Số 1 Phan Văn Định <br />
            Phường Hòa Minh <br />
            Quận Liên chiểu
            </p>
        </div>
        <img src="https://www.harvard.edu/wp-content/uploads/2023/06/071322_Features_KS_097-768x576.jpg"/>
    </div>
  )
}

export default Contact
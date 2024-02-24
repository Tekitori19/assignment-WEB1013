import styles from './FeedBack.module.css'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast.success('Gửi thành công')
const reset = () => toast('Đã Reset', {
    icon: '👏',
  });

const FeedBack = () => {

  document.title = "Góp ý"

  return (
    <div className={styles.container}>
      <img src="https://images.unsplash.com/photo-1579600161224-cac5a2971069?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <form onSubmit={e=>
          {
              notify()
              e.preventDefault()
          }}
          className={styles.form}>
            <h1>Cảm ơn bạn vì đã vào trang web của chúng tôi</h1>
            <p>Mọi ý kiến đóng góp vui lòng điền vào biểu mẫu bên dưới</p>
          <div className={styles.formContainner}>
              <div className={styles.formGroup}>
                  <h2>Họ và tên</h2>
                  <div className={styles.controlContainer}>
                      <div className={styles.formControl}>
                          <input name='Ho' type="text" id='form-name'
                          //  value={formValue.ho}
                            required/>
                          <label htmlFor="form-name">Họ và tên</label>
                      </div>
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <h2>Email <span title='Bắt buộc'>*</span></h2>
                  <div className={styles.controlContainer}>
                      <div className={styles.formControl}>
                          <input type="text" name='emai' id='form-email'
                          //  value={formValue.email}
                            required/>
                          <label htmlFor="form-email">Nhập email</label>
                      </div>
                      <div className={styles.formControl}>
                          <input type="text" id='form-confirm-email'
                          //  value={formValue.reEnterEmail}
                            required/>
                          <label htmlFor="form-confirm-email">Xác nhận lại Email</label>
                      </div>
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <h2>Ghi chú <span title='Bắt buộc'>*</span></h2>
                  <div className={styles.formControl}>
                      <textarea name="ghiChu" id="ghiChu" cols="30" rows="10" required></textarea>
                      <label htmlFor="ghiChu"
                      //  value={formValue.text}
                       >Tối đa 1000 kí tự</label>
                  </div>
              </div>
              <div className={styles.BtnGroup}>
                  <button className={styles.btn} type='submit'>Gửi</button>
                  <button className={styles.btn} type='reset' onClick={reset}>Nhập lại</button>
              </div>
              <Toaster />
          </div>
      </form>
    </div>
  )
}

export default FeedBack
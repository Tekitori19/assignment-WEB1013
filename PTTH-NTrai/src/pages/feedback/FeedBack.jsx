import styles from './FeedBack.module.css'

const FeedBack = () => {
  return (
    <form onSubmit={e=> 
        {
            alert("Gửi thành công")
            e.preventDefault()
        }}
        className={styles.form}>
        <div className={styles.formContainner}>
            <div className={styles.formGroup}>
                <h2>Họ và tên</h2>
                <div className={styles.controlContainer}>
                    <div className={styles.formControl}>
                        <input name='Ho' type="text" id='form-first-name'/>
                        <label htmlFor="form-first-name">Họ</label>
                    </div>
                    <div className={styles.formControl}>
                        <input name='ten' type="text" id='form-last-name'/>
                        <label htmlFor="form-last-name">Tên</label>
                    </div>
                </div>
            </div>
            <div className={styles.formGroup}>
                <h2>Email <span title='Bắt buộc'>*</span></h2>
                <div className={styles.controlContainer}>
                    <div className={styles.formControl}>
                        <input type="text" name='emai' id='form-email'/>
                        <label htmlFor="form-email">Nhập email</label>
                    </div>
                    <div className={styles.formControl}>
                        <input type="text" id='form-confirm-email'/>
                        <label htmlFor="form-confirm-email">Xác nhận lại Email</label>
                    </div>
                </div>
            </div>
            <div className={styles.formGroup}>
                <h2>Ghi chú <span title='Bắt buộc'>*</span></h2>
                <div className={styles.formControl}>
                    <textarea name="ghiChu" id="ghiChu" cols="30" rows="10"></textarea>
                    <label htmlFor="ghiChu">Tối đa 1000 kí tự</label>
                </div>
            </div>
            <div className={styles.BtnGroup}>    
                <button className={styles.btn} type='submit'>Gửi</button>
                <button className={styles.btn} type='reset'>Nhập lại</button>
            </div>
        </div>
    </form>
  )
}

export default FeedBack
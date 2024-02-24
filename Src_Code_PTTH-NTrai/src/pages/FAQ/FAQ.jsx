import React, { useState, useRef } from 'react';
import styles from './FAQ.module.css';
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast.success('Gửi thành công')
const error = () => toast.error("Vui lòng nhập câu hỏi")

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Trường THPT Nguyễn Trãi được thành lập từ khi nào?',
      answer: 'Trường THPT Nguyễn Trãi được thành lập hơn 40 năm.'
    },
    {
      id: 2,
      question: 'Trường THPT Nguyễn Trãi tự hào về điều gì?',
      answer: 'Trường THPT Nguyễn Trãi tự hào về việc đạt chuẩn quốc gia về chất lượng đầu ra tốt.'
    },
    {
      id: 3,
      question: 'Đội ngũ giáo viên của Trường THPT Nguyễn Trãi như thế nào?',
      answer: 'Đội ngũ giáo viên của Trường THPT Nguyễn Trãi là những người có kinh nghiệm và nhiệt huyết.'
    },
    {
      id: 4,
      question: 'Trường THPT Nguyễn Trãi cam kết mang đến cho học sinh điều gì?',
      answer: 'Trường THPT Nguyễn Trãi cam kết mang đến cho học sinh một môi trường học tập tích cực và đầy tiềm năng để phát triển.'
    },
    {
      id: 5,
      question: 'Mục tiêu chính của Trường THPT Nguyễn Trãi là gì?',
      answer: 'Mục tiêu chính của Trường THPT Nguyễn Trãi là cung cấp một môi trường học tập chất lượng và nuôi dưỡng tài năng trẻ.'
    },
    {
      id: 6,
      question: 'Trường THPT Nguyễn Trãi có những cơ sở vật chất nào?',
      answer: 'Trường THPT Nguyễn Trãi có cơ sở vật chất hiện đại và đầy đủ.'
    },
  ]
);

  const inputElement = useRef(null)

  document.title = "Hỏi đáp"
  return (
    <div className={styles.container}>
      <h1>Câu hỏi thường gặp</h1>
      <div className={styles.questionList}>
        {questions.map((q) => (
          <div key={q.id} className={styles.questionItem}>
            <h3>{q.question}</h3>
            <p>        
              <img className={styles.userIcon}
              src="https://th.bing.com/th/id/OIP.CjRitGCD6l29jagExY17ggHaE8?rs=1&pid=ImgDetMain"
              alt="User"
              title='Đăng nhập'
              />
              <div>{q.answer ?? "quản trị viên chưa trả lời"}</div>
          </p>
          </div>
        ))}
      </div>
      <form onSubmit={e => e.preventDefault()} 
            className={styles.container} 
            style={{textAlign:"center", display:"flex", flexDirection:"column"}}>
        <label htmlFor="cauHoi" style={{fontSize:"50px"}}>Câu hỏi mới:</label>
        <input type="text" 
                id='cauHoi' 
                name='cauHoi' 
                ref={inputElement}
                style={{padding:"10px 0px", marginBottom:"10px"}}
        />
        <button 
        type='submit'
        style={{padding:"10px 0px", marginBottom:"10px", fontSize:"20px",fontWeight:"600"}} 
        onClick={()=>{
            if(!inputElement.current.value) {
                error()
                return
            }
            setQuestions([...questions, {id: questions.length+1, question: inputElement.current.value}])
            notify()
            inputElement.current.value = ""
        }}
        >
            Gửi
        </button>
        <Toaster/>
      </form>
    </div>
  );
}

export default FAQ;



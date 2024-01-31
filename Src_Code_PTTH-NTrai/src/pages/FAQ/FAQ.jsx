import React, { useState, useRef } from 'react';
import styles from './FAQ.module.css';
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast.success('Gửi thành công')
const error = () => toast.error("Vui lòng nhập câu hỏi")

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Câu hỏi 1',
      answer: 'Câu trả lời cho câu hỏi 1'
    },
    {
      id: 2,
      question: 'Câu hỏi 2',
      answer: 'Câu trả lời cho câu hỏi 2'
    },
    {
      id: 3,
      question: 'Câu hỏi 3',
      answer: 'Câu trả lời cho câu hỏi 3'
    },
    {
      id: 4,
      question: 'Câu hỏi 4',
      answer: 'Câu trả lời cho câu hỏi 4'
    },
    {
      id: 5,
      question: 'Câu hỏi 5',
      answer: 'Câu trả lời cho câu hỏi 5'
    },
    {
      id: 6,
      question: 'Câu hỏi 6',
      answer: 'Câu trả lời cho câu hỏi 6'
    },
  ]);

  const inputElement = useRef(null)

  document.title = "Hỏi đáp"
  return (
    <div className={styles.container}>
      <h1>Câu hỏi thường gặp</h1>
      <div className={styles.questionList}>
        {questions.map((q) => (
          <div key={q.id} className={styles.questionItem}>
            <h3>{q.question}</h3>
            <p>{q.answer ?? "quản trị viên chưa trả lời"}</p>
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



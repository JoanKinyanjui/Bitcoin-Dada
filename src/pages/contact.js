import Nav from '@/components/Nav';
import styles from '../styles/contact.module.css';
import stylesz from '../styles/index.module.css';
import Footer from '@/components/Footer';
import { useState } from 'react';


function Contact() {
  const [name,setName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');
  const onChangeName =(e)=>{
    setName(e.target.value);
  }

  const onChangePhoneNumber=(e)=>{
    setPhoneNumber(e.target.value);
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangeMessage=(e)=>{
    setMessage(e.target.value)
  }

  const sendEmail = (e) => {
      e.preventDefault();
      setName('')
      setPhoneNumber('')
      setEmail('')
      setMessage('')
      console.log(name,phoneNumber,email,message)
  };

  return (
<div className='text-white bg-[#161616]'>
<Nav />
<div className={`${styles.ContactDiv} grid items-center place-content-center`}>
    

    <div  className={`${styles.ContactDivContainer} items-center`}>
    {/* //pic */}
    <div className={`${styles.ContactImg}`}>
      <img src='/images/women.jpg' className='w-3/4 mx-auto h-full'/>
    </div>
    {/* form */}
    <div className={`${styles.InputFormDiv}`}>
    <p className={`${styles.GetInTuchDiv} pb-8 `}>Get In Touch Using The Form Below</p>

    <form    onSubmit={sendEmail}>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Name*</label>
      <input type='text' className={`${styles.InputField}`} value={name} onChange={onChangeName} />
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Email*</label>
      <input type='text' className={`${styles.InputField}`}   value={email} onChange={onChangeEmail}/>
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Phone Number*</label>
      <input type='text' className={`${styles.InputField}`}  value={phoneNumber}
    onChange={onChangePhoneNumber}/>
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Write a message to us*</label>
      <textarea className={`${styles.InputField1}`}  value={message}  onChange={onChangeMessage}></textarea>
    </div>
    <div className={`${styles.InputFieldDiv} flex place-content-center md:place-content-start`}>
      <input type='submit' value='Submit' className={`${stylesz.ButtonsForDesktop}`}/>
    </div>
    </form>
    </div>
    </div>
    
        </div>
       <Footer /> 
        </div>
  )
}

export default Contact
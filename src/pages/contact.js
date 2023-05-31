import Nav from '@/components/Nav';
import styles from '../styles/contact.module.css';
import stylesz from '../styles/index.module.css';
import Footer from '@/components/Footer';


function Contact() {
  return (
<div className='text-white bg-black'>
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
    <div className={`${styles.InputFieldDiv}`}>
      <label>Name*</label>
      <input type='text' className={`${styles.InputField}`} />
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Email*</label>
      <input type='text' className={`${styles.InputField}`}/>
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Phone Number*</label>
      <input type='text' className={`${styles.InputField}`}/>
    </div>
    <div className={`${styles.InputFieldDiv}`}>
      <label>Write a message to us*</label>
      <textarea className={`${styles.InputField1}`}></textarea>
    </div>
    <div className={`${styles.InputFieldDiv} flex place-content-center md:place-content-start`}>
      <input type='submit' value='Submit' className={`${stylesz.ButtonsForDesktop}`}/>
    </div>
    </div>
    </div>
    
        </div>
       <Footer /> 
        </div>
  )
}

export default Contact
import styles from '../styles/index.module.css'

function Subscribe() {
  return (
    <div className={`${styles.Subscribe} w-screen grid text-white place-content-center mt-12 ` }>
    <div className='grid place-content-center w-full'>
      <p className={`${styles.AboutUsDesktop} flex place-content-center py-8 `}>Subscribe to the latest Update</p>
      <div className={`${styles.InboxMiniDivDesktop} flex justify-between items-center py-4`}>
        <input type='text' className={`${styles.SubscribeInputField}`} />
        <input type='submit' value='Subscribe' className={`${styles.ButtonsForDesktop}`}/>
      </div>
    </div>
    
    </div>
  )
}

export default Subscribe
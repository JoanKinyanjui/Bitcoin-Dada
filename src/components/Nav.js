import styles from '../styles/index.module.css';

function Nav() {
  return (
    <div className='w-screen'>
    <div className={`${styles.NavDesktop} w-4/5 mx-auto flex justify-between items-center`}>
    <div className={`${styles.LogoDiv}`}><img src='/images/logo.png' className={`${styles.logoDesktop} w-full h-full`}/></div>
    {/* <div className={`${styles.NavItemsDEsktopDiv}`}>
      <p className={`${styles.NavItemDesktop}`}>About Us</p>
      <p className={`${styles.NavItemDesktop}`}>Learn Bitcoin</p>
      <p className={`${styles.NavItemDesktop}`}>News</p>
    </div> */}
    <div>
      <button className={`${styles.ButtonDesktop} flex items-center text-white place-content-center`}>Donate</button>
    </div>
    </div>
  
  </div>
  )
}

export default Nav
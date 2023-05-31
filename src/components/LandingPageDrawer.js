import Link from 'next/link';
import styles from '../styles/Drawer.module.css'
import stylesz from '../styles/index.module.css';
import CloseIcon from '@mui/icons-material/Close';

function LandingPageDrawer({toggleDrawer}) {
  return (
     <div className='w-screen h-[max-content] grid items-center place-content-start bg-[#aaa9a7] pb-4'>

       <div className='flex justify-between px-4 w-screen py-4 items-center'>
       <div className={`${stylesz.ComponentDivImage}`}><img src='/images/logo2.jpg' className='w-full h-full' /></div>
      
      <div className="flex"  >
        < CloseIcon className='w-[35px] h-[30px] text-black ' onClick={ toggleDrawer(false)} />
      </div>
       </div>
    <div className={`${styles.NavDesktop} w-screen px-4 mx-auto grid justify-between items-center`}>
   
    <div className={`${styles.NavItemsDEsktopDiv} py-4`}>
    <Link href='/' >  <p className={`${styles.NavItemDesktop} py-2`}>Home</p></Link > 
    <Link href='/learnBitcoin' ><p className={`${styles.NavItemDesktop} py-2`}>Learn Bitcoin</p></Link > 
    <Link href='/news' ><p className={`${styles.NavItemDesktop} py-2`}>News</p></Link > 
    <Link href='/contact' > <p className={`${styles.NavItemDesktop}`}>Contact</p></Link>
    </div>
    <div>
    <Link href='/contact'> <button className={`${stylesz.ButtonDesktop} flex items-center text-white place-content-center`}>Donate</button></Link>
    </div>
    </div>
  
  </div> 
  )
}

export default LandingPageDrawer
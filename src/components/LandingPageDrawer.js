import styles from '../styles/Drawer.module.css'
import stylesz from '../styles/index.module.css';
import CloseIcon from '@mui/icons-material/Close';

function LandingPageDrawer({toggleDrawer}) {
  return (
     <div className='w-screen h-[max-content] grid items-center place-content-start bg-[#aaa9a7] pb-4'>

       <div className='flex justify-between px-4 w-screen py-4 items-center'>
       <div className=' '><img src='/images/logo.png' className={` w-[80px] h-[100px]l `}/></div>
      
      <div className="flex"  >
        < CloseIcon className='w-[35px] h-[30px] text-black ' onClick={ toggleDrawer(false)} />
      </div>
       </div>
    <div className={`${styles.NavDesktop} w-screen px-4 mx-auto grid justify-between items-center`}>
   
    <div className={`${styles.NavItemsDEsktopDiv} py-4`}>
      <p className={`${styles.NavItemDesktop} py-2`}>About Us</p>
      <p className={`${styles.NavItemDesktop} py-2`}>Learn Bitcoin</p>
      <p className={`${styles.NavItemDesktop} py-2`}>News</p>
    </div>
    <div>
      <button className={`${stylesz.ButtonDesktop} flex items-center text-white place-content-center`}>Donate</button>
    </div>
    </div>
  
  </div> 
  )
}

export default LandingPageDrawer
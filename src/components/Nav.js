import { useState } from 'react';
import styles from '../styles/index.module.css';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LandingPageDrawer from '@/components/LandingPageDrawer';
import {BiMenu} from 'react-icons/bi'



function Nav() {

const [state, setState] = useState({
  top: false,
});
const toggleDrawer = (open) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, top: open });
};
  return (
    <>
    {/* Desktop */}
    <div className='w-screen hidden md:grid'>
    <div className={`${styles.NavDesktop} w-4/5 mx-auto flex justify-between items-center`}>
    <div className={`${styles.LogoDiv}`}><img src='/images/logo2.jpg' className=' w-full h-full'/></div>
    <div className={`${styles.NavItemsDEsktopDiv}`}>
      <p className={`${styles.NavItemDesktop}`}>About Us</p>
      <p className={`${styles.NavItemDesktop}`}>Learn Bitcoin</p>
      <p className={`${styles.NavItemDesktop}`}>News</p>
    </div>
    <div>
      <button className={`${styles.ButtonDesktop} flex items-center text-white place-content-center`}>Donate</button>
    </div>
    </div>
  
  </div>
  {/* Mobile Design */}
  <div className='grid md:hidden'>
  <div className={`${styles.NavDesktopComponent} w-10/12  mx-auto flex justify-between items-center`}> 
          <div className={`${styles.ComponentDivImage}`}><img src='/images/logo2.jpg' /></div>
          <div className='flex'  >
                  <BiMenu  onClick={toggleDrawer(true)} className='text-white text-3xl'/>    
        <SwipeableDrawer
        anchor="top"
        open={state.top}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <LandingPageDrawer toggleDrawer={toggleDrawer}/>
      </SwipeableDrawer>  
          </div>
     </div>
  </div>

  </>
  )
}

export default Nav
import styles from '../styles/index.module.css'

function ApplyToLaunch() {
  return (
    <div className={`${styles.ApplyToLaunch} flex mx-auto  `}>
<div className='grid items-center'>
<p className={`${styles.AboutUsDesktop}  w-3/5 md:w-3/4 px-6 flex flex-wrap `}>Apply to launch your Project to the launchpad.</p>
<div className=' px-6'>
  <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
</div>
</div>
<div className={`${styles.calendarDesktopDiv}`}>
  <img src='/images/calendar.png' className='w-full h-full' />
</div>
</div>
  )
}

export default ApplyToLaunch;
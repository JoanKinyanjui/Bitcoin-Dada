import styles from '../styles/index.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

function WhatWeDo() {
  return (
    <div className={`${styles.WhatWeDoDesktop}  w-10/12   justify-between items-center mx-auto text-white`}>
    <div className={`${styles.FirstPartDesktop} `}>
    <p className={`${styles.AboutUsDesktop} `} >What We <span className={`${styles.YelloSpan}`}>Do</span></p>
    <div className={`${styles.YellowLine}`}></div>
    <p className='w-full md:w-10/12 py-8 text-[18px]'>We are passionate about empowering women with knowledge about Bitcoin and its transformative technology. We specialize in providing comprehensive educational resources, training programs, and support specifically tailored to women who want to understand and participate in the world of cryptocurrencies.</p>
    <div className='flex  py-8'>
      <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
    </div>
    </div>
    <div className={`${styles.AgainGRiParts}  flex flex-wrap place-content-center gap-4  md:gap-8`}>
      <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
        <p className={`${styles.IndividualWhatWeDoTopic}`}>Online Courses</p>
        <p className='text-[14px] px-2' >Our course is designed to help our students learn easily, with simple relevant and engaging content</p>
        <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
      </div>
      <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
      <p className={`${styles.IndividualWhatWeDoTopic}`}>Bitcoin MeetUps</p>
        <p className='text-[14px] px-2'>We organize In person Bitcoin meet ups, giving our students the opportunity to expand their knowledge, interact with already existing bitcoinners and learn about new developments.</p>
        <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
      </div>
      <div className={`${styles.IndividualWhatWeDo1} text-center grid items-center`}>
      <p className={`${styles.IndividualWhatWeDoTopic}`}>Career Days</p>
        <p className='text-[14px] px-2'>Key opinion leaders in the industry get to share information about their workplace, their job, and the education and skills that are required for success in their career.</p>
        <p className='flex font-semibold items-center w-full place-content-center gap-2'>READ MORE <AiOutlineArrowRight /> </p>
      </div>
    </div>
    </div>
  )
}

export default WhatWeDo
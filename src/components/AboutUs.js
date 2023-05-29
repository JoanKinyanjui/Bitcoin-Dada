import styles from '../styles/index.module.css'

function AboutUs() {
  return (
    <div className='grid place-content-center w-10/12 mx-auto text-white py-6'>
  <p className={`${styles.AboutUsDesktop} flex place-content-start pt-4 items-center`}> About Us</p>
  <div className={`${styles.YellowLine}`}></div>
  <div className={`${styles.AboutUsDiv} text-white py-6`}>
  <div className={`${styles.Women1DivPic}`}>
    <img  src='/images/btcdadas.jpg' className='w-full h-full' />
    <div class={`${styles.gradientOverlay}`}></div>
    </div>
  <div className={`${styles.AboutUsInfoDiv} grid items-center place-content-center`}>
    <p className={`${styles.TopicPtag} py-12 md:pl-4`}>We set a foundation for women to have an entry point into Bitcoin through Education!</p>
    <p className='text-16px md:text-[18px] md:pl-4'>Bitcoin Dada is a women centric entity that is working towards educating African women into Bitcoin.Dada means Sister in Swahili. We narrow the gender divide in the space through education, online courses, community events and social networking.</p>
    <p className='py-6 text-[18px] md:pl-4'>LORRAINE. A. MARCEL</p>
    <p className='text-[18px] text-neutral-400 md:pl-4'>Founder, Bitcoin Dada</p>
  </div>
 <div>
    
 </div>
 
  </div>
</div>
  )
}

export default AboutUs
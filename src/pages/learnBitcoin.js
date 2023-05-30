import Nav from '@/components/Nav'
import stylesz  from '../styles/learn.module.css';
import Footer from '@/components/Footer'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styles  from '../styles/index.module.css';

function LearnBitcoin() {
  return (
    <div className={`${stylesz.OverallLearnPage}`}>
    <Nav />
    <div className={`${stylesz.ImageContainer}`}>
        <img src='/images/now.png' className='w-full h-full'/>
    </div>
    <div className='py-12'>
    <div className={`${stylesz.IndividualWhatWeDo1} text-center grid items-center`}>
      <p className={`${stylesz.IndividualWhatWeDoTopic}`}>Course Description</p>
        <p className='text-[16px] md:text-[18px] px-4'>This course provides an introduction to Bitcoin. Students will learn about the history, technology, economics, and applications of Bitcoin. They will also explore the potential of blockchain technology to revolutionize various industries and discuss the opportunities in the Bitcoin ecosystem.</p>
        <p className='flex font-semibold items-center w-full place-content-center gap-2 text-[#FFAF00]'> APPLY HERE<AiOutlineArrowRight /> </p>
      </div>
    </div>
   <div className={`${styles.FooterDesktop}`}>
<Footer />
</div>
    </div>
  )
}

export default LearnBitcoin;
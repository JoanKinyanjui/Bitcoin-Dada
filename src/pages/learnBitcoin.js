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
        <img src='https://images.pexels.com/photos/5940845/pexels-photo-5940845.jpeg?auto=compress&cs=tinysrgb&w=1600' className='w-full h-full'/>
    </div>
    <div className='py-12'>
    <div className={`${stylesz.IndividualWhatWeDo1} text-center grid items-center py-8 md:py-4`}>
      <p className={`${stylesz.IndividualWhatWeDoTopic} py-4`}>Course Description</p>
        <p className='text-[16px] md:text-[18px] px-4 md:px-12'>This course provides an introduction to Bitcoin. Students will learn about the history, technology, economics, and applications of Bitcoin. They will also explore the potential of blockchain technology to revolutionize various industries and discuss the opportunities in the Bitcoin ecosystem.</p>
        <p className='flex font-semibold items-center w-full place-content-center py-4 text-[#FFAF00]'> APPLY HERE<AiOutlineArrowRight /> </p>
      </div>
    </div>
   <div className={`${styles.FooterDesktop}`}>
<Footer />
</div>
    </div>
  )
}

export default LearnBitcoin;
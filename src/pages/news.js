import Nav from '@/components/Nav'
import stylesz  from '../styles/news.module.css';
import Footer from '@/components/Footer'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styles  from '../styles/index.module.css';

function News() {
  return (
<>
<div className={`${stylesz.OverallNewsPage}  `}>
        <Nav />
        <div className={`${stylesz.ImageContainer}`}>
            {/* <img src='/images/newsbackground.jpg' className={`${styles.ImageContainerIndividualImage}`}/> */}
            <div className={`${stylesz.NewsandPress}`}>News & Press</div>
        </div>
        <div className='py-12'>
        <div className={`${stylesz.IndividualWhatWeDo1} text-center grid items-center `}>
          <p className={`${stylesz.IndividualWhatWeDoTopic} py-6 text-[#FFAF00]`}>Bitcoin Dada Launches Free Bitcoin Training for Women</p>
          <p className='text-[16px] md:text-[18px] px-4 text-center md:text-start'> The empowering course narrows the gender divide in the Bitcoin niche by providing education and a safe, supportive space for women.
Nairobi, August 18, 2022—Bitcoin Dada, a one-of-a-kind bitcoin education platform focused on women, launched free bitcoin training for women through online courses. It is open to women from anywhere in the country. This launch marks a first in making the bitcoin niche open to women by tailoring the training to their needs.
Bitcoin Dada was founded in 2022 in response to the need for more women in the crypto space. The organization provides the resources and training to educate more women about the Bitcoin ecosystem and, in turn, expand Bitcoin Adoption in Africa.
Bitcoin Dada looks to solve the problem of women falling behind in Bitcoin education, especially in Africa, because of many factors, including;

</p>
            <ul className='list-disc text-left w-10/12 mx-auto py-4'>
              <li>A general gender gap in financial literacy and financial sector</li>
              <li>Not feeling safe in male dominated events</li>
              <li>Available education content being too technical</li>
              <li>The general tendency of women to be more risk averse.</li>
            </ul>
   <p className='text-center md:text-start py-4'>
   Bitcoin Dada solves these challenges by providing the right education in a communal setting where women are comfortable, safe, and have all the support to enable them to take up further roles and opportunities in the space.
Already the organization has successfully held its first training with a cohort of 20 women starting their course on 7th June 2022 and finishing it on 7th July 2022. The course lasts a month and classes are held from 9 pm every Tuesday and Thursday.
It also has built a community of 120 women and held several online events discussing various topics on bitcoin. There are 100 more students on the waiting list.
</p>         

<p className='text-center md:text-start py-4'>
“My interactions at various crypto events shaped my understanding of the challenges facing a woman trying to enter the blockchain ecosystem,” said Marcel Atieno, Bitcoin Dada Founder. “Women form a significant population and are often left behind in many innovations in the digital space. At Bitcoin Dada, we endeavor to close this gap and turn what is perceived to be a foreign and even suspect technology into a well-understood and adopted resource by the masses. With Bitcoin Dada, women not only get the right education but also benefit from the social networking events and peer-to-peer connections, along with exposure to the latest trends in the industry.”
The women joining the program are eager and excited both at the prospects of a safe environment and understanding what has previously been an alien buzzword.
“The fact that people keep talking about it around me and I have no idea what it is, I want to be able to understand in deeper lengths and apply it,” said Grace Kago, one of the students. “I am eager to learn in a safe space without the fear of being conned,” added Wambui, another student.
The right education remains vital to the widespread adoption of Bitcoin and blockchain technology in general. Now women have a safe platform to learn and gain resources, and the organization’s vision is to take this further with more services and wider reach across the continent.
</p>
<p className=' text-start  py-4 font-semibold text-[#FFAF00]'>About Bitcoin Dada</p>
<p className='text-center md:text-start'>
Bitcoin Dada is a unique platform working towards educating African women about Bitcoin. Its mission is to create a safe and inclusive space for the African woman to learn about Bitcoin while being a part of a women-focused community that wants her to succeed.
</p>
        </div>
       <div className={`${styles.FooterDesktop} pt-12`}>
    <Footer />
    </div>
        </div>
        </div>
  </>
   
    
  )
}

export default News;
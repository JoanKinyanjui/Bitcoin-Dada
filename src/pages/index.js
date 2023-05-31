import styles from '../styles/index.module.css';
import {RiComputerLine} from 'react-icons/ri';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from '@/components/Footer';
import TabComponent from '@/components/tabPills';
import 'animate.css';
import ApplyToLaunch from '@/components/ApplyToLaunch';
import Subscribe from '@/components/Subscribe';
import WhatWeDo from '@/components/WhatWeDo';
import AboutUs from '@/components/AboutUs';
import Nav from '@/components/Nav';
import Link from 'next/link';


export default function Home() {
  return (
   <div className="bg-[#161616]">
    {/* Desktop Design */}
<Nav />

{/* Hero Section */}
<div className={`${styles.HeroSectionDesktop} grid w-screen place-content-center`}>
<img src='/images/bitcoin.png' className={`${styles.BitcoinImg1}`} />
  <img src='/images/bitcoin.png' className={`${styles.BitcoinImg}`} />
  <img src='/images/star.png' className={`${styles.StarImg}`} />
  {/* <img src='/images/sphere.png' className={`${styles.SphereImg}`}/> */}
  <img src='/images/star.png' className={`${styles.StarImg1}`} />
  <div className={`${styles.WomenINBTCDesktopDiv} hidden md:flex`}>
  <img src='/images/bitcoinhero.png' className={`${styles.WomenINBTCDesktop} animate__animated animate__delay-10s animate__flip animate__slower animate__infinite`} />
</div>
<div className={`${styles.WomenINBTCDesktopDiv} flex md:hidden`}>
  <img src='/images/bitcoinhero.png' className={`${styles.WomenINBTCDesktop} animate__animated animate__delay-10s animate__flipInX animate__slower animate__infinite`} />
</div>
<div className={`${styles.EducationH1Desktop}`} >
  <p>EDUCATING AFRICAN WOMEN IN BITCOIN</p>
</div>
<div  className={`${styles.EducationPTagDesktop} pt-[46px]`}>
  <p> Create a safe space for the African woman to learn about Bitcoin, while being part of a women-focused community that wants her to succeed.</p>
</div>

<div className='flex place-content-center pt-[46px]'>
  <button className={`${styles.ButtonsForDesktop}`}>Apply Now</button>
</div>

</div>

{/* About Us */}
<AboutUs />

{/* What We Do */}
<WhatWeDo />

{/* Apply to launch your project */}
<ApplyToLaunch />

{/* TabsPills */}
<div className={`${styles.TabPillsDivDesktop} w-screen`}>
  <TabComponent />
</div>


{/* Donate */}
<div className={`${styles.DonateDiv} flex mx-auto py-8`}>
<div className='grid items-center'>
<p className={`${styles.AboutUsDesktop} w-3/4 px-6 flex flex-wrap text-white `}>Donate</p>
<div className=' px-6'>
<Link href='/contact'> <button className={`${styles.ButtonsForDesktop}`}>Donate</button></Link>
</div>
</div>
<div className={`${styles.giftDesktopDiv}`} >
  <img src='/images/gift.png' className='w-full h-full' />
</div>
</div>

{/* Subscribe */}
<Subscribe />

{/* Footer */}
<div className={`${styles.FooterDesktop}`}>
<Footer />
</div>

   </div>
  )
}

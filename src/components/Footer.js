import styles from '../styles/footer.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
   <>
   <div className={`${styles.FooterLine} mt-12`}></div>
    <div className='w-screen grid place-content-center '>
    <Grid container spacing={2} alignItems="center"   >
    <Grid item xs={12} sm={6} lg={3}>
       <div  className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center`}>
        <img src="images/logo.png"/>
        <p className='sm:px-16 px-4'>The next generation of the financial ecosystem is being built and we as women cant afford to delay learning about the Bitcoin ecosystem. And as Bitcoin Dada our main goal is to empower the African woman through education on this new and excellent future scope. Thereby accelerating bitcoin adoption across the continent.</p>
       </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
       <div  className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start text-center `}>
        <p className={`${styles.MainWords} py-4`} >What We Offer</p>
        <p>Online Courses</p>
        <p>Meet Ups</p>
        <p>Career Days</p>
        <p>Podcasts with KOLs</p>
       </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
      <div className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center`}>
        <p className={`${styles.MainWords} py-4`}>Ouick Links</p>
        <p>About Us</p>
        <p>Meet Ups</p>
        <p>Learn Bitcoin</p>
        <p>News & Press</p>
        <p>Donate</p>
       </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
      <div   className={`${styles.GridFooterDesktop}  className='grid  place-content-center md:place-content-start  text-center `}>
        <p className={`${styles.MainWords} py-4`}>Contacts</p>
        <p>+254 700 225 704</p>
        <p>bitcoindada@protonmail.com</p>
       </div>
      </Grid>
    </Grid>
  </div>
  <div className='py-4 md:py-8'>

  </div>
  </>
  )
}

export default Footer
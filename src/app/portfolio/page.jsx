import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Illustration from '/public/illustration.png'
import Websites from '/public/websites.jpg'
import Apps from '/public/apps.jpg'
import Link from 'next/link';


const Portfolio = () => {
  return (
    <div className={styles.container} >
      <h2 className={styles.subtitle}>Choose a gallery</h2>
     
      <div className={styles.cardscontainer}>
        <div className={styles.cardcontainer}>
          <Link href="/portfolio/Illustrations" ><Image src={Illustration} className={styles.card} alt='Illustration'  /></Link>
          <h2 className={styles.intext}>Illustrations</h2>
        </div>
        <div className={styles.cardcontainer}>
          <Link href="/portfolio/Websites" ><Image src={Websites} className={styles.card} alt='Websites'  /></Link>
          <h2 className={styles.intext}>Websites</h2>
        </div>
        <div className={styles.cardcontainer}>
          <Link href="/portfolio/Applications" ><Image src={Apps} className={styles.card} alt='Apps'  /></Link>
          <h2 className={styles.intext}>Applications</h2>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

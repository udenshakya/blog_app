import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Apps from 'public/apps.jpg'
import Link from 'next/link';


const About = () => {
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer}>
        <Image src={Apps} alt='image' className={styles.img} />
        <div className={styles.innertext}>
        <h2>Digital StoryTeller</h2>
        <p>Handcrafting award winning digital experience</p>
        </div>
      </div>
      <div className={styles.contents} >
      <div className={styles.content}>
        <h2>Who Are We?</h2><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit nobis distinctio mollitia repudiandae debitis?</p><br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum odio porro provident veritatis, hic expedita nisi deserunt accusamus facere mollitia?</p><br/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum odio porro provident veritatis, hic expedita nisi deserunt accusamus facere mollitia?</p>
      </div>
      <div className={styles.content}>
        <h2>What We Do?</h2><br/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repellendus id, consectetur corporis assumenda quae sequi quo earum officia aliquam, deserunt omnis saepe praesentium natus.</p><br/>
        <p>-Creative Illustrtions</p><br/>
        <p>-Dynamic Websites</p><br/>
        <p>Fast and handy mobile apps</p><br/>
        <Link href='/contact'> <button className={styles.button} >Contact</button></Link>
      </div>
    </div>
    </div>
  );
}

export default About;

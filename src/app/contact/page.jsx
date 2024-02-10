import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Contactimg from 'public/contact.png'

export const metadata = {
  title: 'Contact Page',
  description: 'Contact Page',
}


const Contact = () => {
  return (
    <div className={styles.container} >
      <div>
        <h1 className={styles.title}>Lets Keep In Touch</h1>
        </div>
      <div>
        <div className={styles.contents}>
        <div className={styles.imgcontainer}>
          <Image src={Contactimg} className={styles.img} alt='image' />
        </div>
        <div className={styles.formcontainer}>
          <form className={styles.form}>
            <input type='text'  placeholder='Name' className={styles.input} />
            <input type='email'  placeholder='Email' className={styles.input} />
            <textarea type='text'  placeholder='Message'  className={styles.input} />
            <button type='submit' className={styles.button} >Send</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

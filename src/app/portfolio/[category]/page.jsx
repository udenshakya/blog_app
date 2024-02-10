import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';


const Category = ({params}) => {
  return (
    <div className={styles.container} >
      <h1>{params.category}</h1>
      <div className={styles.contentcontainer}>
        <div className={styles.contents}>
          <h2 className={styles.title}>Creative Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.</p>
          <button className={styles.button}>See More</button>
        </div>
        <div className={styles.imgcontainer}>
          <Image src='https://images.pexels.com/photos/18079755/pexels-photo-18079755/free-photo-of-wooden-footpath-and-mountain-behind.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' className={styles.img} width={300} height={200} alt='image' />
        </div>
      </div>
      <div className={styles.contentcontainer}>
        <div className={styles.contents}>
          <h2 className={styles.title}>Creative Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.</p>
          <button className={styles.button}>See More</button>
        </div>
        <div className={styles.imgcontainer}>
          <Image src='https://images.pexels.com/photos/18079755/pexels-photo-18079755/free-photo-of-wooden-footpath-and-mountain-behind.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' className={styles.img} width={300} height={200} alt='image' />
        </div>
      </div>
      <div className={styles.contentcontainer}>
        <div className={styles.contents}>
          <h2 className={styles.title}>Creative Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quidem rerum quae perspiciatis voluptas distinctio cupiditate error dolores nostrum non.</p>
          <button className={styles.button}>See More</button>
        </div>
        <div className={styles.imgcontainer}>
          <Image src='https://images.pexels.com/photos/18079755/pexels-photo-18079755/free-photo-of-wooden-footpath-and-mountain-behind.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' className={styles.img} width={300} height={200} alt='image' />
        </div>
      </div>

    </div>
  );
}

export default Category;




import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';

async function getData(){
  const res=await fetch('http://localhost:3000/api/posts',{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData()

  return (
    <>
    {data.map((item)=>(
      <Link href={`/blog/${item._id}`} key={item._id} >
    <div className={styles.container} >
      <div className={styles.imgcontainer}>
        <Image src={item.img} height={300} width={300} className={styles.img} />
      </div>
      <div className={styles.textcontainer}>
        <h2>{item.title} </h2>
        <p>{item.desc} </p>
      </div>
    </div>
    </Link>
    ))}
    </>
  );
}

export default Blog;

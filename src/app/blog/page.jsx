"use client"
import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import useSWR from "swr";


async function getData(){
  const res=await fetch('http://localhost:3000/api/posts')

  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  return res.json()
}

const Blog =  () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts`,
    fetcher
  );
//  await getData()
 mutate()

  return (
    <>
    {data?.map((item)=>(
      <Link href={`/blog/${item._id}`} key={item._id} >
    <div className={styles.container} >
      <div className={styles.imgcontainer}>
        <Image src={item.img} height={300} width={300} alt='image' className={styles.img} />
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

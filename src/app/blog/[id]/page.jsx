import React from "react";
import styles from "./page.module.css";
import Image from "next/image";



async function getData(id){
  const res=await fetch(`http://localhost:3000/api/posts/${id}`)

  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  return res.json()
}

export async function generateMetadata({params}){
  const post = await getData(params.id)
  return{
    title:post.title,
    description:post.desc
  }
}


const BlogPost = async ({params}) => {
  const data=await getData(params.id)

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            {data.title}
          </h2>
          <p>{data.desc}</p>

          <div className={styles.profile}>
            <Image
              src={data.img}
              height={300}
              width={300}
              className={styles.profileimg}
            />
            <div className={styles.profilename}>
              <p>{data.username} </p>
            </div>
          </div>
        </div>
        <div className={styles.imgcontainer}>
          <Image
            src={data.img}
            height={300}
            width={300}
            className={styles.img}
          />
        </div>
      </div>
      <div>
      <p>
        {data.content}
      </p>
      </div>
    </div>
  );
};

export default BlogPost;

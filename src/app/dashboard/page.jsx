"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.leftcontainer}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <Image src={post.img} height={200} width={200} alt="image" />
                  <p>{post.title} </p>
                  <p
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </p>
                </div>
              ))}
        </div>
        <div className={styles.formcontainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input type="text" placeholder="Title" className={styles.input} />
            <input
              type="text"
              placeholder="Description"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Paste images from pexels.com"
              className={styles.input}
            />
            <textarea
              placeholder="Content"
              cols="30"
              rows="10"
              className={styles.input}
            />
            <button className={styles.button}>Send</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Dashboard;

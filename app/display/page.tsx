"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

type Post = { id: string; number: number };

async function fetchPosts() {
  const res = await fetch("../api/posts", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    loadPosts();
    const interval = setInterval(loadPosts, 60000);

    return () => clearInterval(interval);
  }, []);

  if (posts == undefined || posts.length === 0) {
    return <p>*_*</p>;
  }
  const cols = Math.ceil(Math.sqrt(posts.length));

  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.h1}>Valentinstag</h1> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "transparent",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/heartPink.svg"}
              alt={"heart"}
              width={(6 / cols) * 142}
              height={(6 / cols) * 142}
              className={styles.heart}
            />
            <div
              className={styles.number}
              style={{
                fontSize: `${(6 / cols) * 50}px`,
              }}
            >
              {post.number}
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.footer}>
        <Link href={"/"} className={styles.homeButton}>
          Home
        </Link>
      </div> */}
    </div>
  );
}

"use server";
import { prisma } from "../lib/db";
import styles from "./page.module.css";
import Link from "next/link";

async function page() {
  const posts = await prisma.post.findMany();
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
            <img
              src={"/heartPink.svg"}
              alt={"heart"}
              width={(6 / cols) * 142}
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

export default page;

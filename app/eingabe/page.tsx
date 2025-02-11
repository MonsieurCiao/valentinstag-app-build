"use server";
import React from "react";
import styles from "./page.module.css";
import { prisma } from "../lib/db";
import { createPost, deletePost } from "../actions/actions";
import Link from "next/link";

async function page() {
  const posts = await prisma.post.findMany();
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <ul className={styles.ul}>
          {posts.map((post, index) => (
            <li key={index} className={styles.li}>
              <form className="flex justify-between" action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                {post?.number}
                <button type="submit">del</button>
              </form>
            </li>
          ))}
        </ul>
        <form className={styles.form} action={createPost}>
          <input className={styles.input} type="number" name="number" />
          <button className={styles.submit} type="submit">
            add
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <Link href={"/"} className={styles.homeButton}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default page;

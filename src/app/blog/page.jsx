"use client";
import Card from "@/components/card/card";
import styles from "./blog.module.css";
import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;
    const fetchPosts = async () => {
      const postsQuery = query(collection(db, "posts"), limit(25));
      onSnapshot(postsQuery, (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const { userId, title, slug, desc, createdAt } = doc.data();
          return {
            title,
            createdAt,
            userId,
            slug,
            desc,
            id: doc.id,
          };
        });
        setPosts(data);
      });
    };
    if (!ignore) {
      fetchPosts();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Card post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;

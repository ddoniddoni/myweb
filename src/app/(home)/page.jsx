import styles from "./home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>안녕하세요~</h1>
        <p className={styles.desc}>반갑습니다</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Contact</button>
          <button className={styles.button}>Me</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/ddoni.jpg"
            alt=""
            width={200}
            height={200}
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/ddoni.jpg"
          alt=""
          width={200}
          height={200}
          className={styles.iconImg}
        />
      </div>
    </div>
  );
}

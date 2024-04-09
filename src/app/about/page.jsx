import Image from "next/image";
import styles from "../about/about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>H_H_H_H_H_H_H_H_H_</h2>
          <h1 className={styles.subtitle}>
            asdasdsadsaadasdasdasdsadasdsadadasda
            sdsadsaadasdasdasdsadasdsadadasdasdsad saadasdasdasdsadasdsadad
          </h1>
          <p className={styles.desc}>asdasdasdasdafwqfwqffkjhnjkasndk</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>경력</h1>
              <p>3년</p>
            </div>
            <div className={styles.box}>
              <h1>경력</h1>
              <p>3년</p>
            </div>
            <div className={styles.box}>
              <h1>경력</h1>
              <p>3년</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/ddoni.jpg" alt="" fill />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;

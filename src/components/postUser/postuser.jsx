import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const Postuser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <div className={styles.title}>작성자</div>
      <div className={styles.username}>박상돈</div>
    </div>
  );
};

export default Postuser;

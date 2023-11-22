import styles from "./ForYou.module.css";

const ForYou = () => {
  return (
    <div className={`${styles["for-you"]} col-xl-3 justify-center`}>
      <div className={`${styles["right-sidebar"]} col-6`}>
        <div className={styles["for-you"]}>
          <p>Suggeriti per te</p>
          <p>Mostra Tutti</p>
        </div>
        <ul>
          <li className="d-flex justify-space-between">
            <div className="d-flex">
              <div className={styles.icon}></div>
              <div>
                <p className={styles.username}>username</p>
                <p className={styles.followed}>Seguito da</p>
              </div>
            </div>
            <div className={styles.link}>
              <a href="">Segui</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForYou;

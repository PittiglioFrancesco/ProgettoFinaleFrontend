import styles from "./ForYou.module.css";

const ForYou = () => {
  return (
    <div class={`${styles["for-you"]} col-xl-3 justify-center`}>
      <div class={`${styles["right-sidebar"]} col-6`}>
        <div class={styles["for-you"]}>
          <p>Suggeriti per te</p>
          <p>Mostra Tutti</p>
        </div>
        <ul>
          <li className="d-flex justify-space-between">
            <div className="d-flex">
              <div class={styles.icon}></div>
              <div>
                <p class={styles.username}>username</p>
                <p class={styles.followed}>Seguito da</p>
              </div>
            </div>
            <div class={styles.link}>
              <a href="">Segui</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForYou;

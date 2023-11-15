import styles from "./Post.module.css";
import calculatePostTime from "./postTime";

const Card = ({ key, username, date, imgSrc, likes, description }) => {
  const difference = calculatePostTime(date, Date.now());
  return (
    <div className={`${styles.card} row col-sm-12 col-xl-8`} key={key}>
      <div className="row justify-space-between align-center col-sm-12">
        <div
          className={`${styles.left} row align-center justify-space-between`}
        >
          <div className={styles.circle}></div>
          <div className={styles["page-name"]}>{username}</div>
          <div className={styles["post-date"]}>{difference}</div>
        </div>
        <div className="right">
          <div className={styles.other}>other</div>
        </div>
      </div>
      <div className="row col-sm-12">
        <img src={imgSrc} />
      </div>
      <div className="row col-12">
        <p className={styles["likes-icon"]}></p>
        <p className={styles.likes}>Piace a {likes.length} persone.</p>
      </div>
      <div className="row col-12">
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

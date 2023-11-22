import InfoRow from "../../Posts/InfoRow";
import styles from "./Card.module.css";

const Card = ({ key, profileId, date, imgSrc, likes, description }) => {
  return (
    <div className={`${styles.card} row col-sm-12 col-xl-8`} key={key}>
      <InfoRow styles={styles} profileId={profileId} date={date} />
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

import styles from "./Card.module.css";

const Card = ({children, style}) => {
  const className = style ? styles.card + " " + style : styles.card;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Card;

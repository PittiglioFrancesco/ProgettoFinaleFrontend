import styles from "./Button.module.css";

const Button = ({ type, children, color }) => {
  const buttonClassName = color ? styles.button + " " + color : styles.button;

  return (
      <button className={buttonClassName} type={type}>
        {children}
      </button>
  );
};

export default Button;

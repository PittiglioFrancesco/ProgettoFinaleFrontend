import styles from "./Input.module.css";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;

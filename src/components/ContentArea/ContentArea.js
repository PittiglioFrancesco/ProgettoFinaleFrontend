import styles from "./contentArea.module.css";

const ContentArea = ({ children, classNames }) => {
  return (
    <div className={`offset-sm-1 offset-xl-2 ${classNames}`} >
      {children}
    </div>
  );
};

export default ContentArea;

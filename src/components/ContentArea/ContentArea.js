import styles from "./contentArea.module.css";

const ContentArea = ({ children }) => {
  return (
    <div class="row offset-sm-1 offset-xl-2 col-sm-10 col-xl-7 justify-center">
      {children}
    </div>
  );
};

export default ContentArea;

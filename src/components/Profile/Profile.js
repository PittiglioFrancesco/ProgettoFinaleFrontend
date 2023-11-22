import ContentArea from "../ContentArea/ContentArea";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../UI/Button/Button";
import styles from "./Profile.module.css";

const Profile = () => {
  const images = [
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
    {
      src: "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    },
  ];

  const imgsComponent = images.map((img) => {
    return (
      <div className={`col-4 ${styles["img-container"]}`}>
        <img src={img.src} alt="img" />
      </div>
    );
  });

  return (
    <>
      <Sidebar />
      {/*  <ContentArea> */}
      <div className={`offset-2 col-10 d-flex justify-center`}>
        <div className="col-6">
          <div className="row justify-space-between align-center">
            <img
              className={styles["profile-img"]}
              src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
              alt="img"
            />
            <div className="info">
              <div className="row justify-space-between align-center">
                <p>username</p>
                <Button>Modifica Profilo</Button>
              </div>
            </div>
          </div>
          <div className="row">{imgsComponent}</div>
        </div>
      </div>
      {/* </ContentArea> */}
    </>
  );
};

export default Profile;

{
  /* <div className="row">
          <div className="col-10">
            <div className="row justify-space-between">
              <div className="circle">
                <img
                  src="https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"
                  alt="img"
                />
              </div>
              <div className="info">
                <div className="row">
                  <p>username</p>
                  <Button>Modifica Profilo</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">{imgsComponent}</div>
          </div>
        </div> */
}

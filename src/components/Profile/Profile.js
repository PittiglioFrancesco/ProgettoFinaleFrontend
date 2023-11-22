import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../UI/Button/Button";
import { useAuth } from "../utils/AuthContext";
import styles from "./Profile.module.css";
import { useParams } from "react-router-dom";
import { readAllPostsOfProfile, readProfileById } from "../../config";

const Profile = ({ params }) => {
  const { user } = useAuth();
  const { profileId } = useParams();
  const [profileInfo, setProfileInfo] = useState({});

  const onLoadProfileInfo = async () => {
    console.log(typeof profileId)
    try {
      const data = await readProfileById(+profileId);
      setProfileInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onLoadProfileInfo();
  }, []);

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
                <p>{profileInfo.username}</p>
                {profileInfo === profileId && <Button>Modifica Profilo</Button>}
              </div>
            </div>
          </div>
          <div className="row">{imgsComponent}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;

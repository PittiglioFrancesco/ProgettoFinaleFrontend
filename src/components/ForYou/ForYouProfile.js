import { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";

const ForYouProfile = ({ styles, profilesInfo }) => {
  const { user } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    setData(
      profilesInfo.map((profileInfo, i) => {
        if (profileInfo.id !== user.id) {
          return (
            <li key={i} className="d-flex justify-space-between">
              <div className="d-flex">
                <div className={styles.icon}></div>
                <div>
                  <p className={styles.username}>{profileInfo.username}</p>
                  <p className={styles.followed}>Seguito da</p>
                </div>
              </div>
              <div className={styles.link}>
                <a href="">Segui</a>
              </div>
            </li>
          );
        }
      })
    );
  }, [profilesInfo]);

  return <ul>{data}</ul>;
};

export default ForYouProfile;

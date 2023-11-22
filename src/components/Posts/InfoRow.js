import { useEffect, useState } from "react";
import calculatePostTime from "../utils/Card/postTime";
import { readProfileById } from "../../config";
import { useAuth } from "../utils/AuthContext";

const InfoRow = ({ styles, profileId, date }) => {
  const { user } = useAuth();

  const [profileInfo, setProfileInfo] = useState({});

  const onLoadGetProfileInfo = async () => {
    try {
      const data = await readProfileById(+profileId);
      setProfileInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onLoadGetProfileInfo();
  }, []);

  const difference = calculatePostTime(date, Date.now());

  return (
    <div className="row justify-space-between align-center col-sm-12">
      <div className={`${styles.left} row align-center justify-space-between`}>
        <div className={styles.circle}></div>
        <div className={styles["page-name"]}>{profileInfo.username}</div>
        <div className={styles["post-date"]}>{difference}</div>
      </div>
      <div className="right">
        <div className={styles.other}>
          {profileId === user.id ? "edit" : "other"}
        </div>
      </div>
    </div>
  );
};

export default InfoRow;

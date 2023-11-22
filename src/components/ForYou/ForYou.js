import { useEffect, useState } from "react";

import styles from "./ForYou.module.css";
import { readFirstFiveProfiles } from "../../config";
import ForYouProfile from "./ForYouProfile";

const ForYou = () => {
  const [profilesInfo, setProfilesInfo] = useState([]);

  const onLoadGetProfilesInfo = async () => {
    try {
      const data = await readFirstFiveProfiles();
      setProfilesInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onLoadGetProfilesInfo();
  }, []);

  return (
    <div className={`${styles["for-you"]} col-xl-3 justify-center`}>
      <div className={`${styles["right-sidebar"]} col-6`}>
        <div className={styles["for-you"]}>
          <p>Suggeriti per te</p>
          <p>Mostra Tutti</p>
        </div>
        <ForYouProfile styles={styles} profilesInfo={profilesInfo} />
      </div>
    </div>
  );
};

export default ForYou;

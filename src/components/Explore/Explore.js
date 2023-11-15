import ContentArea from "../ContentArea/ContentArea";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

const Explore = () => {
  return (
    <>
    <Sidebar />
      <ContentArea classNames={"col-sm-10 col-xl-7 row justify-center"}>
        <h1>Esplora avrà post di utenti non seguiti</h1>
        <Posts />
      </ContentArea>
    </>
  );
};

export default Explore;

import ContentArea from "../ContentArea/ContentArea";
import Posts from "../Posts/Posts";
import ForYou from "../ForYou/ForYou";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
    <Sidebar />
      <ContentArea classNames={"col-sm-10 col-xl-7 row justify-center"}>
        <Posts />
      </ContentArea>
      <ForYou />
    </>
  );
};

export default Home;

import ContentArea from "../ContentArea/ContentArea";
import Posts from "../Posts/Posts";
import ForYou from "../ForYou/ForYou";

const Home = () => {
  return (
    <>
      <ContentArea classNames={"col-sm-10 col-xl-7 row justify-center"}>
        <Posts />
      </ContentArea>
      <ForYou />
    </>
  );
};

export default Home;

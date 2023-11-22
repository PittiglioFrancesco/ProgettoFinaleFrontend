import Card from "../utils/Post/Post";
import"./Posts.module.css";

const postsData = [
  {
    profileImg: "",
    username: "pagina_1",
    date: Date.now(),
    imgSrc:
      "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    likes: [0, 1],
    description: "descrizione 1",
  },
  {
    profileImg: "",
    username: "pagina_2",
    date: Date.now(),
    imgSrc:
      "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    likes: [0, 1],
    description: "descrizione 2",
  },
  {
    profileImg: "",
    username: "pagina_3",
    date: Date.now(),
    imgSrc:
      "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg",
    likes: [0, 1],
    description: "descrizione 3",
  },
];

const posts = postsData.map((postData, i) => {
  return (
    <Card
      key={i}
      username={postData.username}
      date={postData.date}
      imgSrc={postData.imgSrc}
      likes={postData.likes}
      description={postData.description}
    />
  );
});

const Posts = () => {
  return posts;
};

export default Posts;

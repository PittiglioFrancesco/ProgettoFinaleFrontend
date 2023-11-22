import { useEffect, useState } from "react";
import Card from "../utils/Card/Card";
import "./Posts.module.css";
import { getAllPosts } from "../../config";
import { useAuth } from "../utils/AuthContext";

const Posts = () => {
  const { user } = useAuth();
  const [postsData, setPostsData] = useState([]);
  const stockimg = "https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"

  const onloadGetPosts = async () => {
    try {
      const data = await getAllPosts(user.token);
      setPostsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onloadGetPosts();
  }, []);

  const posts = postsData.map((postData) => {
    return (
      <Card
        key={postData.id}
        profileId={postData.profileId}
        date={postData.createdAt}
        imgSrc={postData.imgSrc ? postData.imgSrc : stockimg}
        likes={postData.likes ? postData.likes : []}
        description={postData.description}
      />
    );
  });

  return posts;
};

export default Posts;

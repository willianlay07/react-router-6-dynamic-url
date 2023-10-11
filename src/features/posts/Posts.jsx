import { useLoaderData } from "react-router-dom";

import { fetchAllPost } from "../../services/apiPosts";
import PostList from "./PostList";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export async function loader() {
  const posts = await fetchAllPost();
  return posts;
}

export default Posts;

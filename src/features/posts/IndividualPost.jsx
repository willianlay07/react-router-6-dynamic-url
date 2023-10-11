import { useLoaderData } from "react-router-dom";

import { fetchEachPost } from "../../services/apiPosts";

const IndividualPost = () => {
  const { id, title, body } = useLoaderData();

  return (
    <div>
      <h1>Individual Post: #{id}</h1>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  );
};

export default IndividualPost;

export async function loader({ params }) {
  const data = await fetchEachPost(params.id);

  return data;
}

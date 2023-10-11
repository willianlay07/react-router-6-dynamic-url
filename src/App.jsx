import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Posts, { loader as getPosts } from "./features/posts/Posts";
import IndividualPost, {
  loader as getEachPost,
} from "./features/posts/IndividualPost";
import Error from "./ui/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: getPosts,
          errorElement: <Error />,
        },
        {
          path: "/posts/:id",
          element: <IndividualPost />,
          loader: getEachPost,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

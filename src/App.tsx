import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import PreventRoute from "./Prevent";
import PrivateRoute from "./Private";
import Home from "./page/home";
import Like from "./page/like";
import Bookmark from "./page/bookmark";
import Post from "./page/post";
import Profile from "./page/profile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/likes",
    element: <Like />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
  },
  {
    path: "/posts",
    element: <Post />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

const privateRoutes = ["/", "/likes", "/bookmarks", "/posts", "/profile"];
const publicNotAuthRoutes = ["/sign-in", "/sign-up"];

function App() {
  const routeWithLayer = routes.map((route) => {
    if (privateRoutes.includes(route.path)) {
      return {
        path: route.path,
        element: <PrivateRoute>{route.element}</PrivateRoute>,
      };
    }

    if (publicNotAuthRoutes.includes(route.path)) {
      return {
        path: route.path,
        element: <PreventRoute>{route.element}</PreventRoute>,
      };
    }

    return {
      path: route.path,
      element: route.element,
    };
  });

  const router = createBrowserRouter(routeWithLayer);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

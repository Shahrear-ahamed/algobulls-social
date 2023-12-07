import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import PreventRoute from "./Prevent";
import PrivateRoute from "./Private";
import Home from "./page/home";

const routes = [
  {
    path: "/",
    element: <Home />,
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

const privateRoutes = ["/", "/dashboard"];
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

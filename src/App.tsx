import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import PreventRoute from "./Prevent";
import PrivateRoute from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <h1>Home</h1>
        <Link to="/sign-in">Sign In</Link>
      </PrivateRoute>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <PreventRoute>
        <SignIn />
      </PreventRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PreventRoute>
        <SignUp />,
      </PreventRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

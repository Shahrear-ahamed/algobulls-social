import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import PrivateRoute from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <h1>Home</h1>
      </PrivateRoute>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
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

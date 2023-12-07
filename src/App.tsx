import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./page/signIn";
import SignUp from "./page/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Home</h1>
      </>
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

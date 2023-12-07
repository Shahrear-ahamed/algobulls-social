import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { decodedAuthToken } from "./utils/token";
import Loading from "./components/ui/Loading";

interface IDecodeUser {
  email: string;
  id: string;
}

export default function PreventRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    id: "",
    loading: true,
  });

  useEffect(() => {
    const decodedToken = decodedAuthToken();

    if (decodedToken !== null) {
      const decodeUser = decodedToken as IDecodeUser;
      setUser({ loading: false, email: decodeUser.email, id: decodeUser.id });
    } else {
      setUser({ loading: false, email: "", id: "" });
    }
  }, []);

  if (user.loading) {
    return <Loading />;
  }

  // eslint-disable-next-line no-extra-boolean-cast
  if (user.email && user.id) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

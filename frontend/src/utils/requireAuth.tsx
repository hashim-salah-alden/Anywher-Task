import { Navigate } from 'react-router-dom';
import { useAppSelector } from "../rtk/hooks";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isLoggedIn } = useAppSelector((state) => state.persistedReducer.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default RequireAuth
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

interface PropsI {
  children: React.ReactNode;
}

const ProtectedRouter = ({ children }: PropsI) => {
  const { user } = useAuthContext();

  if (!user || !user.Admin) return <Navigate to="/" replace></Navigate>;

  return <>{children}</>;
};

export default ProtectedRouter;

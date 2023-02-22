import { Navigate } from 'react-router-dom';
import { ContextI, useAuthContext } from '../context/AuthContext';

interface PropsI {
  children: React.ReactNode;
  require: boolean;
}

const ProtectedRouter = ({ children, require }: PropsI) => {
  const { user } = useAuthContext() as ContextI;

  if (!user || (require && !user.Admin)) return <Navigate to="/" replace></Navigate>;

  return <>{children}</>;
};

export default ProtectedRouter;

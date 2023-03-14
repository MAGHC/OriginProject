import { useRouter } from 'next/router';
import { ContextI, useAuthContext } from '../context/AuthContext';

interface PropsI {
  children: React.ReactNode;
  require: boolean;
}

const ProtectedRouter = ({ children, require }: PropsI) => {
  const router = useRouter();

  const { user } = useAuthContext() as ContextI;

  if (!user || (require && !user.Admin)) return router.push({ pathname: '/' });

  return <>{children}</>;
};

export default ProtectedRouter;

import { LoginI } from '../type/AuthType';

interface PropsI {
  user: LoginI;
}

const User = ({ user }: PropsI) => {
  const { displayName, photoURL } = user;
  return (
    <div className="flex items-center gap-3">
      <img
        referrerPolicy="no-referrer"
        className=" w-9 rounded-lg"
        src={photoURL}
        alt={displayName}
      ></img>
      <span className=" font-title hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;

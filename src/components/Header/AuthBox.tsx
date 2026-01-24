import { Link } from "react-router-dom";

interface AuthBoxProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const AuthBox: React.FC<AuthBoxProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <div className="auth-box">
      {!isLoggedIn ? (
        <>
          <Link to="/login" className="auth-item">
            <i className="fa-solid fa-key"></i>
            <span className="auth-text">Kirish</span>
          </Link>

          <Link to="/register" className="auth-item">
            <i className="fa-solid fa-user"></i>
            <span className="auth-text">Ro‘yxatdan o‘tish</span>
          </Link>
        </>
      ) : (
        <>
          <div className="auth-item">
            <i className="fa-solid fa-user"></i>
            <span className="auth-text">Profil</span>
          </div>

          <button onClick={onLogout} className="auth-item logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="auth-text">Chiqish</span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthBox;

import { Link, useNavigate } from "react-router-dom";

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
            <span>Kirish</span>
          </Link>

          <Link to="/register" className="auth-item">
            <i className="fa-solid fa-user"></i>
            <span>Ro‘yxatdan o‘tish</span>
          </Link>
        </>
      ) : (
        <>
          <div className="auth-item">
            <i className="fa-solid fa-user"></i>
            <span>Profil</span>
          </div>

          <button onClick={onLogout} className="auth-item logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Chiqish</span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthBox;

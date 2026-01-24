import { useState } from "react";
import "./login.css";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-wrapper">
      <div className="login-card">
             <div className="login-header">
          Avtorizatsiya
        </div>
             <form className="login-form">
               <label>Login <span>*</span></label>
          <div className="login-input-group">
            <input type="text" placeholder="Loginni kiriting" />
            <button type="button" className="domain-btn">
              @mail.uz
            </button>
          </div>
             <label>Parol <span>*</span></label>
          <div className="password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Parolni kiriting"
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>
                  <div className="captcha-row">
            <img
              src="https://dummyimage.com/120x40/eee/333&text=e+f+h+r+b"
              alt="captcha"
            />
            <button type="button" className="refresh">⟳</button>
          </div>
          <label>Tekshirish kodi <span>*</span></label>
          <input type="text" placeholder="Kodni kiriting" />
          <button className="login-btn">Kirish</button>
                <div className="login-links">
            <a href="/register">Ro‘yxatdan o‘tish</a>
            <a href="/forgot">Parolni qayta tiklash</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

import { useState } from "react";
import "./register.css";

interface RegisterForm {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<RegisterForm>({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ro‘yxatdan o‘tish ma’lumotlari:", formData);
  };

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Ro‘yxatdan o‘ting</h2>

        <div className="row">
          <input
            type="text"
            name="lastName"
            placeholder="Familiyasi"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="Ismi"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email manzil"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Parol"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

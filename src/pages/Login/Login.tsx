import "./Login.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ADMIN_EMAIL = "Bukharisameer3@gmail.com";
const ADMIN_PASSWORD = "78667866Sam&&";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    const newErrors = { email: "", password: "" };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (password.length <= 5) {
      newErrors.password = "Password must be longer than 5 characters.";
    } else if (!/[!@#$%^&*()\-_=+[\]{};':"\\|,.<>/?]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    const isAdmin =
      trimmedEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD;

    const role = isAdmin ? "admin" : "user";
    const resolvedEmail = isAdmin ? ADMIN_EMAIL : trimmedEmail;

    localStorage.setItem("auth_role", role);
    localStorage.setItem("auth_email", resolvedEmail);
    useAuthStore.setState({ role, email: resolvedEmail });
    navigate("/home");
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <img
          className="login-logo"
          src="/logo.jpeg"
          alt="Sam's Hot Chicken logo"
        />

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your account</p>

        <div className="login-form">
          <label className="login-label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            className="login-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label className="login-label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            className="login-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="field-error">{errors.password}</p>}

          <button className="login-submit" type="button" onClick={handleLogin}>
            Login
          </button>
        </div>

        <p className="login-footer-text">
          Don&apos;t have an account? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;

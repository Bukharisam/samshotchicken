import "./SignUp.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = () => {
    const trimmedEmail = email.trim();
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (password.length <= 5) {
      newErrors.password = "Password must be longer than 5 characters.";
    } else if (!/[!@#$%^&*()\-_=+[\]{};':"\\|,.<>/?]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character.";
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("auth_role", "user");
    localStorage.setItem("auth_email", trimmedEmail);
    localStorage.setItem("auth_name", name.trim());
    useAuthStore.setState({
      role: "user",
      email: trimmedEmail,
      name: name.trim(),
    });
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

        <h1 className="login-title">Create Account</h1>
        <p className="login-subtitle">Join the flock</p>

        <div className="login-form">
          <label className="login-label" htmlFor="signup-name">
            Full Name
          </label>
          <input
            id="signup-name"
            className="login-input"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <label className="login-label" htmlFor="signup-email">
            Email
          </label>
          <input
            id="signup-email"
            className="login-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label className="login-label" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            className="login-input"
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="field-error">{errors.password}</p>}

          <label className="login-label" htmlFor="signup-confirm">
            Confirm Password
          </label>
          <input
            id="signup-confirm"
            className="login-input"
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="field-error">{errors.confirmPassword}</p>
          )}

          <button className="login-submit" type="button" onClick={handleSignUp}>
            Create Account
          </button>
        </div>

        <p className="login-footer-text">
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

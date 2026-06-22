import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/auth.css";

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    useEffect(() => {
        const role = localStorage.getItem("userRole");
        if (role === "admin") {
            navigate("/dashboard");
        } else if (role === "user") {
            navigate("/");
        }
    }, [navigate]);
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleLogin = async (data) => {
        setLoading(true);
        setAuthError("");
        try {
            const { email, password } = data;
            
            const res = await axios.post(`http://localhost:3000/api/v1/auth/login`, {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            reset();
            
            const role = res.data.loggedInUser?.userRole || "user";
            localStorage.setItem("userRole", role);
            
            if (role === "admin") {
                navigate("/dashboard");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
            setAuthError(
                error.response?.data?.message || 
                "Invalid email or password. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo">
                        <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="8" fill="#3C50E0"/>
                            <rect x="7" y="14" width="4" height="11" rx="2" fill="white"/>
                            <rect x="14" y="7" width="4" height="18" rx="2" fill="white"/>
                            <rect x="21" y="11" width="4" height="14" rx="2" fill="white"/>
                        </svg>
                        <span className="logo-text">TailAdmin</span>
                    </div>
                    <h2>Sign In to Your Account</h2>
                    <p>Enter your credentials to continue</p>
                </div>

                {authError && <div className="auth-alert alert-error">{authError}</div>}

                <form onSubmit={handleSubmit(handleLogin)} className="auth-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-icon-wrapper">
                            <FiMail className="input-icon" />
                            <input 
                                type="email" 
                                placeholder="user@example.com" 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address"
                                    }
                                })} 
                                className={errors.email ? "error" : ""}
                            />
                        </div>
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                        <div className="label-row">
                            <label>Password</label>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </div>
                        <div className="input-icon-wrapper">
                            <FiLock className="input-icon" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                {...register("password", { required: "Password is required" })}
                                className={errors.password ? "error" : ""}
                            />
                            <button 
                                type="button" 
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && <span className="error-message">{errors.password.message}</span>}
                    </div>

                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? "verify..." : "Log in"}
                    </button>
                </form>

                <div className="auth-footer">
                    <span>Don't have an account? <Link to="/Signup" className="auth-link">Sign up here</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
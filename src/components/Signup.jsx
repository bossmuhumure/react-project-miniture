import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/auth.css";

function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [authSuccess, setAuthSuccess] = useState("");
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

    const handleSignup = async (data) => {
        setLoading(true);
        setAuthError("");
        setAuthSuccess("");
        try {
            const { firstName, lastName, email, password } = data;
            
            await axios.post(`http://localhost:3000/api/v1/auth/register`, {
                firstName,
                lastName,
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            setAuthSuccess("Registration successful! You can now log in.");
            reset();
            
            setTimeout(() => {
                navigate("/Login");
            }, 2000);
        } catch (error) {
            console.log("Signup error:", error);
            setAuthError(
                error.response?.data?.message || 
                "An error occurred during registration. Please try again."
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
                    <h2>Create an Account</h2>
                    <p>Sign up to start using the application</p>
                </div>

                {authSuccess && <div className="auth-alert alert-success">{authSuccess}</div>}
                {authError && <div className="auth-alert alert-error">{authError}</div>}

                <form onSubmit={handleSubmit(handleSignup)} className="auth-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <div className="input-icon-wrapper">
                                <FiUser className="input-icon" />
                                <input 
                                    type="text" 
                                    placeholder="John" 
                                    {...register("firstName", { required: "First name is required" })}
                                    className={errors.firstName ? "error" : ""}
                                />
                            </div>
                            {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>lastName</label>
                            <div className="input-icon-wrapper">
                                <FiUser className="input-icon" />
                                <input 
                                    type="text" 
                                    placeholder="Doe" 
                                    {...register("lastName", { required: "Last name is required" })}
                                    className={errors.lastName ? "error" : ""}
                                />
                            </div>
                            {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>email</label>
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
                        <label>Password</label>
                        <div className="input-icon-wrapper">
                            <FiLock className="input-icon" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="At least 6 characters" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
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
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                <div className="auth-footer">
                    <span>Already have an account? <Link to="/Login" className="auth-link">Login here</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
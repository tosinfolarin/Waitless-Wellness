import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// ✅ Define schema using Zod
const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// ✅ Infer TypeScript type from schema
type FormData = z.infer<typeof schema>;

// ✅ Define props for LoginPage
interface LoginPageProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupPage: React.FC<LoginPageProps> = ({ setIsLoggedIn }) => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // ✅ Add form typing
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    console.log(formData);
    setSubmitted(true);

    try {
      // Example login request (uncomment when API is ready)
      // const response = await axios.post("/api/login", formData);
      // if (response.status === 200) {
      //   setIsLoggedIn(true);
      //   navigate("/dashboard");
      // }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div className="SignUp">
        <form onSubmit={handleSubmit(submitData)} className="SignUp">
          <h1>Sign Up</h1>
          <h3>Please sign up if you do not have an account already.</h3>

          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}

          <label>Password:</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}

          <input type="submit" />

          <div className="sign-up-option">
            <p>
              Want to create an account? <Link to="/Signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import InputField from "components/fields/InputField";
import Card from "components/card";
import "./SignIn.css";
import ErrorMessage from "./ErrorMessage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormData from "form-data";

export default function SignIn() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [navigate]);

  const submitHandle = async (data) => {
    const { username, password } = data;

    try {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/login",
        headers: {
          
        },
        data: formData,
      };

      const response = await axios.request(config);
      console.log("Response Data", JSON.stringify(response.data));
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/admin");

    } catch (error) {
      if (error.response) {
        console.log("Error Data:", error.response.data);
        console.log("Error Status:", error.response.status);
        console.log("Error Headers:", error.response.headers);
      } else {
        console.log("Error Message:", error.message);
      }
      setError("Invalid Login Access!");
    }
  };

  return (
    <Card extra=" p-[48px] mb-6" style={{ width: "460px" }}>
      <div className="auth flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-6 text-center text-2xl font-bold text-blue-1000">
            hypertrace
          </h4>
          <p className="welcome-text text-dark mb-1 ml-1 text-base">
            Welcome to Hypertrace! 👋🏻
          </p>
          <p className="mb-6 ml-1 text-base text-gray-600">
            Please sign-in to your account
          </p>
          <Box component="form" onSubmit={handleSubmit(submitHandle)} noValidate>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {/* Username*/}
            <TextField
              autoComplete="username"
              name="username"
              required
              fullWidth
              id="username"
              label="username"
              autoFocus
              variant="standard"
              {...register("username", {
                required: "username is required",
                minLength: { value: 2, message: "minimum length is 2" },
              })}
            />

            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.username && errors.username.message}
            </p>

            {/* Password */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              variant="standard"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password && errors.password.message}
            </p>

            <button
              className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              type="submit"
            >
              Sign In
            </button>
          </Box>
        </div>
      </div>
    </Card>
  );
}

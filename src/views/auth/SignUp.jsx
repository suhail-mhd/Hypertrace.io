import { Link, Routes, Route, Navigate } from "react-router-dom";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import Card from "components/card";
import "./SignIn.css";

export default function SignUp() {
  return (
    <Card extra=" p-[48px] mb-6" style={{ width: "460px" }}>
      <div className="auth flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-6 text-center text-2xl font-bold text-blue-1000">
            Hyper<span className="text-red-1000">trace</span>
          </h4>
          <p className="welcome-text text-dark mb-1 ml-1 text-base">
          Adventure starts here 🚀
          </p>
          <p className="mb-6 ml-1 text-base text-gray-600">
          Make your app management easy and fun!
          </p>
          {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
          {/* username */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Username*"
            placeholder="Enter your Username"
            id="username"
            type="text"
          />
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email or Username*"
            placeholder="Enter your Email or Username"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Enter Password"
            id="password"
            type="password"
          />
          {/* Checkbox */}
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              I agree to privacy policy & terms
              </p>
            </div>
          </div>
          <button className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            <Link to="/admin">Sign Up</Link>
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
            </span>
            <Link
              to="/"
              className="ml-1 text-sm font-medium text-blue-1000 hover:text-brand-600 dark:text-white"
            >
               Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

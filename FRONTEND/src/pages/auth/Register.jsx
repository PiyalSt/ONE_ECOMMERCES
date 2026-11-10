import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = async (e) => {
    if (!username) {
      toast.error("Plase enter your name!");
      setUsernameError(true);
      return;
    }
    if (username.length >= 16 || username.length <= 3) {
      toast.error("Minimum charecter 4 and Max 15!");
      setUsernameError(true);
      return;
    }
    if (!email) {
      toast.error("Plase enter your email!");
      setEmailError(true);
      return;
    }
    if (!password) {
      toast.error("Plase enter your password!");
      setPasswordError(true);
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/ecommerce/v1/register", {
        username,
        email,
        password,
      });
      toast.success("Registration successfully complete!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full p-12 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 tracking-tight">
          Create new account
        </h2>
        <p className="text-xs md:text-sm font-medium text-gray-800 tracking-wide">
          Already have an account login
        </p>
      </div>
      <div className="w-full space-y-4">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium text-gray-900">
            User Name
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError(false);
            }}
            className={`w-full py-2 px-4 border-2  rounded-md outline-0  font-medium ${usernameError ? "border-red-500 text-red-500" : "border-gray-400 text-gray-900"}`}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium text-gray-900">
            Email Address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            className={`w-full py-2 px-4 border-2  rounded-md outline-0  font-medium ${emailError ? "border-red-500 text-red-500" : "border-gray-400 text-gray-900"}`}
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium text-gray-900">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            className={`w-full py-2 px-4 border-2  rounded-md outline-0  font-medium ${passwordError ? "border-red-500 text-red-500" : "border-gray-400 text-gray-900"}`}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button
            onClick={handleRegister}
            className="w-full py-3 bg-gray-900 text-gray-50 font-bold rounded-md hover:bg-gray-950 cursor-pointer transition-all duration-300 active:scale-95"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

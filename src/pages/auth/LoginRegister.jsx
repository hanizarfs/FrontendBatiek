import React, { useState } from "react";
// import { Navbar } from "../../components/Navbar";
// import { Footer } from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginRegister = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://testing-webbb.000webhostapp.com/api/login", {
        email,
        password,
      });

      // Assuming the API response contains the access token and user details
      const { token, user } = response.data;
      console.log("API Response:", response.data);

      // Save the access token to localStorage
      localStorage.setItem("TOKEN", token);

      // Save the email to localStorage
      localStorage.setItem("EMAIL", user.email);
      localStorage.setItem("ROLE", user.role);
      localStorage.setItem("NAME", user.name);

      // Redirect or perform any other action on successful login
      console.log("Login successful");
      if (user.role === "user") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://testing-webbb.000webhostapp.com/api/login",
  //       loginData
  //     );
  //     console.log(response.data); // Handle the successful login response
  //     localStorage.setItem('EMAIL', loginData.email);
  //     localStorage.setItem('TOKEN', loginData.token);
  //   } catch (error) {
  //     console.error(error); // Handle the error
  //   }
  // };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password_confirmation) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    try {
      const response = await axios.post(
        "https://testing-webbb.000webhostapp.com/api/register",
        registerData
      );
      console.log(response.data); // Handle the successful registration response
    } catch (error) {
      console.log(registerData);
      console.error(error); // Handle the error
    }
  };

  const handleRegisterInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-[#3C2A21] mt-[160px]">
        <h1 className="p-8 text-center text-white font-semibold text-4xl">
          Login/Sign Up
        </h1>
      </div>
      <div className="login-section mb-8">
        <div className="container px-6 py-4 mx-auto">
          <h1 className="text-[#3C2A21] font-semibold text-4xl">Login</h1>
          <form
            className="mt-6 p-12 border-yellow-950 border-2 rounded-3xl"
            onSubmit={handleLogin}
          >
            <div>
              <label htmlFor="email" className="block text-base text-gray-800">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-base text-gray-800"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-auto px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D6B716] rounded-lg hover:bg-[#f0ce22] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="register-section mb-8">
        <div className="container px-6 py-4 mx-auto">
          <h1 className="text-[#3C2A21] font-semibold text-4xl">Register</h1>
          <form
            onSubmit={handleRegister}
            className="p-12 border-yellow-950 border-2 rounded-3xl grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className="block text-base text-gray-800">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleRegisterInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                value={registerData.email}
                onChange={handleRegisterInputChange}
                className="block text-base text-gray-800"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-base text-gray-800"
              >
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-base text-gray-800"
              >
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password_confirmation"
                value={registerData.password_confirmation}
                onChange={handleRegisterInputChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-yellow-900 focus:ring-yellow-800 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <input
                type="submit"
                value="Register"
                className="w-auto px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D6B716] rounded-lg hover:bg-[#f0ce22] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              />
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

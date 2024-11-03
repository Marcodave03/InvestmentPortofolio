"use client";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    // console.log('Email:', email);
    // console.log('Password:', password);

    // Example API call (you can replace this with your actual login API)
    // const res = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const data = await res.json();
    // Handle the response as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[50vw] h-[80vh] rounded-lg p-5 shadow-lg">
        <h2 className="text-center text-2xl mb-4 text-black">
          Register
        </h2>
        <div className="flex justify-center mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col w-[40vw]">
            <label htmlFor="email" className="mb-2 text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 p-2 border rounded"
              required
            />

            <label htmlFor="password" className="mb-2 text-black">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 p-2 border rounded"
              required
            />

            <button
              type="submit"
              className="bg-black text-white p-2 mt-10 rounded hover:bg-gray-600 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

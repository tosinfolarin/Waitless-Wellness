// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <section className="text-center max-w-2xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-blue-600">Waitless Wellness Login</span>
        </h1>
        <div className="flex gap-4 justify-center">
          <Link
            to="/closestClinics"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl shadow hover:bg-gray-300 transition"
          >
            Login Form
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;

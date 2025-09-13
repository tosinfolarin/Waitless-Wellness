// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import information from "./information.json"

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <section className="text-center max-w-2xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-blue-600">Welcome</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Track your symptoms with us, Find nearby clinics and access reliable health information.
          {information.MskPhysioInfo} 
        </p>
      </section>
    </main>
  );
};

export default HomePage;

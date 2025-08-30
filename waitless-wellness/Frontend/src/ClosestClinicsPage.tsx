// src/pages/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";

const ClosestClinicsPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <section className="text-center max-w-2xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-blue-600">Waitless Wellness</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
            Closest clinics API integration
        </p>

      </section>
    </main>
  );
};

export default ClosestClinicsPage;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AiKitchen from "./pages/AiKitchen";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* flex-grow keeps the footer pinned to the bottom on short pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ai-kitchen" element={<AiKitchen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

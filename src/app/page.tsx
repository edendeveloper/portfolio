"use client";
import "./home.css";

import Apresentation from "@/components/Apresentation/Apresentation";
import Works from "@/components/Works/Works";

export default function App() {
  return (
    <main className="home-container">
      <Apresentation/>
      <Works/>
    </main>
  );
}

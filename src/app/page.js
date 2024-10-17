"use client"
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fecthingUser = async () => {
      const res = await fetch("/api/getUser");
      const data = await res.json();
      console.log(data);
    };
    fecthingUser();
  }, []);
  return (
    <>
      <main className="max-w-7xl mx-auto ">
        <Dashboard  />
      </main>
    </>
  );
}

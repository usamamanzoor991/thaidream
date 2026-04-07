import React from "react";
import Link from "next/link";
import Dreams from "@/app/components/Home/Dreams";
import Hero from "@/app/components/Home/Hero";
import Stats from "@/app/components/Home/Stats";
import CTA from "./components/Home/CTA";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Dreams />
      <CTA />
    </div>
  );
}

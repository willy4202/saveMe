"use client";

import React from "react";
import dotWave from "@/public/assets/lottie/dot-wave-2.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const HomeLottie = () => {
  return <Lottie animationData={dotWave} loop play className="flex-1 pb-10" />;
};

export default HomeLottie;

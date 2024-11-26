"use client";

import React from "react";
import dotWave from "@/public/assets/lottie/dot-wave-2.json";

import Lottie from "react-lottie-player";

const HomeLottie = () => {
  return <Lottie animationData={dotWave} loop play className="flex-1 pb-10" />;
};

export default HomeLottie;

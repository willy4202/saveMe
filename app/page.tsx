"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import dotWave from "@/app/assets/lottie/dot-wave-2.json";

import Lottie from "react-lottie-player";
export default function Home() {
  const router = useRouter();
  const handleStartTracking = () => {
    router.push("/form");
  };

  return (
    <section className="h-full flex flex-col ">
      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-4xl text-gray-900 dark:text-gray-100 font-bold ">
          직장인이여 버텨라
        </h1>
        <h3 className="text-xl text-gray-600 dark:text-gray-400">
          오늘은 얼마나 벌었을까
        </h3>
      </div>
      <Lottie animationData={dotWave} loop play className="flex-1 pb-10" />
      <div className="flex flex-col px-4">
        <Button
          size="lg"
          onClick={handleStartTracking}
          className="mb-4 flex items-center gap-2 bg-primary text-white"
        >
          시작하기
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}

import HomeButton from "@/components/molecules/HomeButton";
import HomeLottie from "@/components/molecules/HomeLottie";

import React from "react";

export default function Home() {
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
      <HomeLottie />
      <div className="flex flex-col px-4">
        <HomeButton />
      </div>
    </section>
  );
}

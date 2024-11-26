"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const HomeButton = () => {
  const router = useRouter();
  const handleStartTracking = () => {
    router.push("/form");
  };

  return (
    <Button
      size="lg"
      onClick={handleStartTracking}
      className="mb-4 flex items-center gap-2 bg-primary text-white dark:bg-primary-dark dark:text-white"
    >
      시작하기
      <ArrowRightIcon className="w-4 h-4" />
    </Button>
  );
};

export default HomeButton;

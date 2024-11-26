"use client";

import React from "react";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Button
      asChild
      size="lg"
      className="mb-4 flex items-center  bg-primary text-white dark:bg-primary-dark dark:text-white"
    >
      <Link href="/form" className="flex items-center gap-2">
        시작하기
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </Button>
  );
};

export default HomeButton;

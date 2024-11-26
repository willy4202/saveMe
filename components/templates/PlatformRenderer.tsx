"use client";

import { Fragment } from "react";
import useDeviceStore from "@/lib/store/deviceStore";

type Props = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
};

export default function PlatformRenderer({ mobile, desktop }: Props) {
  const { isMobile } = useDeviceStore();

  return <Fragment>{isMobile ? mobile : desktop}</Fragment>;
}

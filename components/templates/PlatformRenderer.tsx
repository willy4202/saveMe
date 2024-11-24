import useDeviceStore from "@/store/deviceStore";
import { Fragment } from "react";

type Props = {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
};

export default function PlatformRenderer({ mobile, desktop }: Props) {
  const { isMobile } = useDeviceStore();

  return <Fragment>{isMobile ? mobile : desktop}</Fragment>;
}

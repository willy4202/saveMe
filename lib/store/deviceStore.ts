import Bowser from "bowser";
import { create } from "zustand";

const checkIsMobile = () => {
  if (typeof navigator !== "undefined") {
    const parser = Bowser.getParser(navigator.userAgent);
    return parser.getPlatformType() === "mobile";
  }
  return false;
};

const getBrowserName = () => {
  if (typeof navigator !== "undefined") {
    const parser = Bowser.getParser(navigator.userAgent);
    return parser.getBrowserName(true);
  }
  return "Unknown";
};

type DeviceState = {
  isMobile: boolean;
  browserName: string;
};

const useDeviceStore = create<DeviceState>(() => ({
  isMobile: checkIsMobile(),
  browserName: getBrowserName(),
}));

export default useDeviceStore;

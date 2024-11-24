import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number | null) =>
  value ? value.toLocaleString("ko-KR") : "";

export const parseCurrency = (value: string) => {
  const numbers = value.replace(/[^0-9]/g, "");
  return numbers ? Number(numbers) : null;
};

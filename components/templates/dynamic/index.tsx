import dynamic from "next/dynamic";

export const Dynamic = dynamic(() => import("./Dynamic"), {
  ssr: false,
});

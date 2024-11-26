import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="px-4">{children}</main>;
};

export default layout;

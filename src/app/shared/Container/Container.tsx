import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1280px] w-full mx-auto px-5">{children}</div>;
};

export default Container;

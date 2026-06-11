import React, { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container = ({ className, children }: Props) => {
  return (
    <div className={`max-w-11/12 mx-auto container max- ${className}`}>
      {children}
    </div>
  );
};

export default Container;

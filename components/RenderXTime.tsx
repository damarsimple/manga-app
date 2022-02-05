import React, { ReactNode } from "react";

export default function RenderXTime({
  children,
  x,
}: {
  children: JSX.Element;
  x: number;
}) {
  const Children = () => children;
  return (
    <>
      {[...Array(x)].map((_, i) => (
        <Children key={i} />
      ))}
    </>
  );
}

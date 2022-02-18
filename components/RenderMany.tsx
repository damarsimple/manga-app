import React, { ReactNode, Fragment } from "react";

export default function RenderMany({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        return <Fragment key={i}>{children}</Fragment>;
      })}
    </>
  );
}

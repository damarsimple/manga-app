import React, { ReactNode } from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import { renderOn } from "../../modules/rules";
import { useRouter } from "next/router";

export default function Dashboard({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  if (renderOn.some((r) => r.test(pathname)))
    return <NavbarAdmin>{children}</NavbarAdmin>;

  return <>{children}</>;
}

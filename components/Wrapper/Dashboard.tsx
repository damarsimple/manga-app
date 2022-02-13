import React, { ReactNode } from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin";

export default function Dashboard({ children }: { children: ReactNode }) {
  return <NavbarAdmin>{children}</NavbarAdmin>;
}

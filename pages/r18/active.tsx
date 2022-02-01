import React from "react";
import { useEffect } from "react";
import { useR18 } from "../../stores/r18";

export default function Active() {
  const { toggle } = useR18();

  useEffect(() => {
    toggle();
  }, []);

  return <div></div>;
}

import React from "react";
import { useEffect } from "react";
import { useR18 } from "../../stores/r18";

export default function Active() {
  const { toggle } = useR18();

  useEffect(() => {
    toggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
}

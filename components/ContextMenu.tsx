import { Paper, Chip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useR18 } from "../stores/r18";

const except = ["/comic", "/chapter"];

export default function ContextMenu() {
  const { push, pathname } = useRouter();
  const { mode } = useR18();

  const check = () => {
    for (const x of except) {
      if (pathname.includes(x)) {
        return false;
      }
    }

    return true;
  };

  if (!check()) return <></>;

  return (
    <Paper sx={{ p: 1 }}>
      {[
        {
          label: "Terbaru",
          path: "/list/comic/terbaru",
        },
        {
          label: "Hot",
          path: "/list/comic/hot",
        },
        {
          label: "Rekomendasi",
          path: "/list/comic/rekomendasi",
        },
        {
          label: "Daftar Isi",
          path: "/list/comic/all",
        },
        {
          label: "Daftar Genre",
          path: "/list/genre/all",
        },
        {
          label: "Daftar Author",
          path: "/list/author/all",
        },
        {
          label: "Adult R18+",
          path: "/r18/active",
          color: mode ? "success" : "error",
        },
      ].map(({ label, path, color }) => (
        <Link href={path} key={label}>
          <a>
            <Chip
              size="medium"
              sx={{ m: 0.5 }}
              label={label}
              onClick={() => push(path)}
              color={color as any}
            />
          </a>
        </Link>
      ))}
    </Paper>
  );
}

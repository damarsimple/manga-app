import { Paper, Chip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useR18 } from "../stores/r18";
import { dontRenderContext } from "../modules/rules";
import { useUserStore } from "../stores/user";

export default function ContextMenu() {
  const { push, pathname } = useRouter();
  const { mode } = useR18();

  const { user } = useUserStore()

  if (dontRenderContext.some((r) => r.test(pathname))) return <></>;

  return (
    <Paper sx={{ p: 1, mb: 1 }}>
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

        ...(user ? [
          {
            label: `Bookmark ()`,
            path: "/dashboard/bookmarks",
          },
        ] : [])

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

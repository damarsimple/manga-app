/* eslint-disable @next/next/no-img-element */
import {
  Book,
  AccessTime,
  Person,
  LocalMovies,
  StarRate,
  Star,
} from "@mui/icons-material";
import { Box, Typography, Chip, Paper, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Model } from "../types";
import moment from "moment";
export type Comic = Model["Comic"];

export interface ComicCardProps extends Comic {
  layout?: "detailed" | "carousel" | "top";
  isFirst?: boolean;
}

export const ComicCard = ({
  name,
  thumb,
  slug,
  author,
  chapters,
  genres,
  _count,
  lastChapterUpdateAt,
  isFirst,
  rating,
  layout = "detailed",
}: ComicCardProps) => {
  const { push } = useRouter();

  const myUrl = "/comic/" + slug;

  const firstChapter = chapters && chapters[0];

  const ChapterTimestamp = ({
    name,
    createdAt,
    id,
  }: Pick<Model["Chapter"], "id" | "name" | "createdAt">) => (
    <Link href={"/chapter/" + id}>
      <a>
        <Box
          display="flex"
          justifyContent="space-between"
          pt={1}
          flexDirection={
            layout != "detailed" ? { xs: "column", md: "row" } : undefined
          }
          alignItems="center"
          gap={1}
        >
          <Box display="flex" alignItems="center" gap={0.5}>
            <Book fontSize="small" />
            <Typography variant={"caption"}>Chapter {name}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <AccessTime fontSize="small" />
            <Typography variant={"caption"}>
              {moment(createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </a>
    </Link>
  );

  const AuthorFormatted = () => (
    <Link href={"/list/author/" + author.slug}>
      <a>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          pt={1}
        >
          <Box display="flex" alignItems="center" gap={0.5}>
            <Person fontSize="small" />
            <Typography variant={"caption"}>Author</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography variant={"caption"}>{author?.name}</Typography>
          </Box>
        </Box>
      </a>
    </Link>
  );

  const GenreFormatted = () => (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <LocalMovies fontSize="small" />
        <Typography variant={"caption"}>Genres</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.1} overflow="hidden">
        {genres.map((e, i) => (
          <Chip
            key={i}
            label={e.name}
            size="small"
            onClick={() => push("/list/genre/" + e.slug)}
          />
        ))}
      </Box>
    </Box>
  );
  const LastUpdatedFormatted = () => (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <AccessTime fontSize="small" />
        <Typography variant={"caption"}>Last Updated</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant={"caption"}>
          {moment(lastChapterUpdateAt).fromNow()}
        </Typography>
      </Box>
    </Box>
  );

  const TotalChapterFormatted = () => (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <Book fontSize="small" />
        <Typography variant={"caption"}>Total Chapter</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant={"caption"}>{_count.chapters} Chapter</Typography>
      </Box>
    </Box>
  );

  const RatingFormatted = () => (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <Star fontSize="small" />
        <Typography variant={"caption"}>Rating</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography variant={"caption"}>{rating}</Typography>
      </Box>
    </Box>
  );

  const TitleFormatted = () => (
    <Link href={myUrl}>
      <a>
        <Typography
          variant={"h5"}
          sx={{
            height: {
              sx: 40,
              sm: 60,
            },
            // whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineClamp: 4,
            fontSize: {
              xs: "1rem",
              sm: "1.3rem",
            },
          }}
        >
          {name}
        </Typography>
      </a>
    </Link>
  );

  const fallback = thumb ?? "/static/no-image.png";

  return (
    <Paper elevation={1} sx={{ display: "flex", width: "100%" }}>
      {layout == "carousel" && (
        <Box sx={{ minWidth: "100%" }}>
          <Link href={myUrl}>
            <a>
              <Image
                src={fallback + "?width=240"}
                height={600}
                width={500}
                alt={name}
              />
            </a>
          </Link>
          <Box sx={{ p: 1 }}>
            <TitleFormatted />
            <ChapterTimestamp {...firstChapter} />
          </Box>
        </Box>
      )}
      {layout == "top" && (
        <Box sx={{ p: 1, minWidth: "100%" }}>
          <Link href={myUrl}>
            <a>
              <Image
                src={fallback + "?width=240"}
                height={600}
                width={500}
                alt={name}
              />
            </a>
          </Link>
          <Box display="flex" alignItems="center" gap={0.5}>
            {isFirst && <StarRate />}
            <TitleFormatted />
          </Box>
          <AuthorFormatted />
          <GenreFormatted />
          <TotalChapterFormatted />
          <RatingFormatted />
          <LastUpdatedFormatted />
        </Box>
      )}
      {layout == "detailed" && (
        <Box display="flex" width="100%">
          <Box display="flex" alignItems="center">
            <Link href={myUrl}>
              <a>
                <Image
                  src={fallback + "?width=240"}
                  height={320 / 2}
                  width={240 / 2}
                  alt={name}
                />
              </a>
            </Link>
          </Box>
          <Box width={"100%"} p={1}>
            <Box display="flex" alignItems="center">
              <TitleFormatted />
            </Box>
            <Divider />
            {chapters.map((e, i) => (
              <ChapterTimestamp {...e} key={e.id} />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

/* eslint-disable @next/next/no-img-element */
import {
  Book,
  AccessTime,
  Person,
  LocalMovies,
  StarRate,
  Star,
} from "@mui/icons-material";
import { Box, Typography, Chip, Paper, Divider, Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Comic, Chapter } from "../types";
import moment from "moment";
import RenderMany from "./RenderMany";
import LazyImage from "./LazyImage";

type LayoutType = "detailed" | "carousel" | "top";

export interface ComicCardProps extends Comic {
  layout?: LayoutType;
  isFirst?: boolean;
  home?: boolean;
}

export const ComicCard = ({
  name,
  thumb,
  slug,
  author,
  chapters,
  genres,
  // _count,
  lastChapterUpdateAt,
  isFirst,
  rating,
  isHentai,
  layout = "detailed",
  home,
}: ComicCardProps) => {
  const { push } = useRouter();

  const myUrl = "/comic/" + slug;

  const firstChapter = chapters && chapters[0];

  const ChapterTimestamp = ({
    name,
    createdAt,
    id,
  }: Pick<Chapter, "id" | "name" | "createdAt">) => (
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
      <Box display="flex" alignItems="center" gap={0.1} overflow="hidden">
        <LocalMovies fontSize="small" />
        {[...genres].slice(0, 2).map((e, i) => (
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

        <Typography variant={"caption"}>
          {moment(lastChapterUpdateAt).fromNow()}
        </Typography>
      </Box>
    </Box>
  );

  // const TotalChapterFormatted = () => (
  //   <Box
  //     display="flex"
  //     flexDirection={{ xs: "column", sm: "row" }}
  //     justifyContent="space-between"
  //     pt={1}
  //   >
  //     <Box display="flex" alignItems="center" gap={0.5}>
  //       <Book fontSize="small" />
  //       <Typography variant={"caption"}>Total Chapter</Typography>
  //     </Box>
  //     <Box display="flex" alignItems="center" gap={0.5}>
  //       <Typography variant={"caption"}>{_count.chapters} Chapter</Typography>
  //     </Box>
  //   </Box>
  // );

  const RatingFormatted = () => (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      pt={1}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <Star fontSize="small" />
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
              xs: 40,
              sm: 60,
            },
            // whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineClamp: 4,
            fontWeight: "bold",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
            },
          }}
        >
          {isHentai && (
            <Box
              component="span"
              sx={{
                height: "100%",
                width: "100%",
                color: "white",
                backgroundColor: "red",
                p: 0.5,
              }}
            >
              18+
            </Box>
          )}{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: name,
            }}
          />
        </Typography>
      </a>
    </Link>
  );

  const fallback = thumb ?? "/static/no-image.png";

  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {layout == "carousel" && (
        <Box sx={{ minWidth: "100%" }}>
          <Link href={myUrl}>
            <a>
              <LazyImage
                src={fallback + "?width=240"}
                height={{
                  xs: home ? 180 : 320,
                  sm: 340,
                }}
                width={"100%"}
                alt={name}
              />
            </a>
          </Link>
          <Box sx={{ p: 1 }}>
            <TitleFormatted />
            {firstChapter && <ChapterTimestamp {...firstChapter} />}
          </Box>
        </Box>
      )}
      {layout == "top" && (
        <Box sx={{ p: 1, minWidth: "100%", display: "flex", gap: 1 }}>
          <Link href={myUrl}>
            <a>
              <LazyImage
                src={fallback + "?width=240"}
                height={"100%"}
                width={120}
                alt={name}
              />
            </a>
          </Link>
          <Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              {isFirst && <StarRate />}
              <TitleFormatted />
            </Box>
            <AuthorFormatted />
            <GenreFormatted />
            {/* <TotalChapterFormatted /> */}
            <RatingFormatted />
            <LastUpdatedFormatted />
          </Box>
        </Box>
      )}
      {layout == "detailed" && (
        <Box display="flex" width="100%" gap={0.5}>
          <Box display="flex" alignItems="center">
            <Link href={myUrl}>
              <a>
                <LazyImage
                  src={fallback + "?width=240"}
                  height={320 / 2}
                  width={100}
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

export const ComicCardSkeleton = ({
  layout = "detailed",
}: {
  layout: LayoutType;
}) => {
  const ChapterTimestamp = () => (
    <Skeleton variant="text" sx={{ height: 30 }} />
  );

  const TitleFormatted = () => (
    <Skeleton variant="text" sx={{ height: 50, width: "100%" }} />
  );

  const fallback = "/static/no-image.png";

  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {layout == "carousel" && (
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton variant="rectangular" height={150} width={"100%"} />
          <Box sx={{ p: 1 }}>
            <TitleFormatted />
            <ChapterTimestamp />
          </Box>
        </Box>
      )}
      {layout == "top" && (
        <Box sx={{ p: 1, minWidth: "100%", display: "flex", gap: 1 }}>
          <Skeleton variant="rectangular" height={"100%"} width={120} />

          <Box sx={{ width: "100%" }}>
            <TitleFormatted />
            <Skeleton variant="text" sx={{ height: 30, width: "100%" }} />
            <Skeleton variant="text" sx={{ height: 30, width: "100%" }} />
            {/* <TotalChapterFormatted /> */}
            <Skeleton variant="text" sx={{ height: 30, width: "100%" }} />
            <Skeleton variant="text" sx={{ height: 30, width: "100%" }} />
          </Box>
        </Box>
      )}
      {layout == "detailed" && (
        <Box display="flex" width="100%" gap={0.5}>
          <Box display="flex" alignItems="center">
            <Skeleton variant="rectangular" height={320 / 2} width={100} />
          </Box>
          <Box width={"100%"} p={1}>
            <Box display="flex" alignItems="center">
              <TitleFormatted />
            </Box>
            <Divider />
            <RenderMany count={3}>
              <ChapterTimestamp />
            </RenderMany>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

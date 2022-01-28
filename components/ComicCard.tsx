import { Book, AccessTime, Person, LocalMovies, StarRate } from "@mui/icons-material"
import { Box, Typography, Chip, Paper, Divider } from "@mui/material"
import Link from "next/link"
import Image from "next/image"


export const ComicCard = ({ isFirst, type = "detailed" }: {
    type?: "detailed"
    | "carousel"
    | "top",
    isFirst?: boolean
}) => {

    const myUrl = "/comic/slug"

    const ChapterTimestamp = () => <Link href={"/chapter/1"} >
        <a>
            <Box display="flex" justifyContent="space-between" pt={1} >
                <Box display="flex" alignItems="center" gap={0.5}>
                    <Book fontSize="small" />
                    <Typography variant={"caption"}>Chapter 1</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                    <AccessTime fontSize="small" />
                    <Typography variant={"caption"} >10 menit yang lalu</Typography>
                </Box>
            </Box>
        </a>
    </Link>

    const AuthorFormatted = () =>
        <Link href={"/chapter/1"} >
            <a>
                <Box display="flex" justifyContent="space-between" pt={1} >
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <Person fontSize="small" />
                        <Typography variant={"caption"}>Author</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <Typography variant={"caption"} >The Great sun Kingdom</Typography>
                    </Box>
                </Box>
            </a>
        </Link>

    const GenreFormatted = () =>
        <Box display="flex" justifyContent="space-between" pt={1} >
            <Box display="flex" alignItems="center" gap={0.5}>
                <LocalMovies fontSize="small" />
                <Typography variant={"caption"}>Genres</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.1}>
                {["Adventure", "Cool", "Bruh"].map((e, i) => <Chip key={i} label={e} size="small" />)}
            </Box>
        </Box>
    const LastUpdatedFormatted = () =>
        <Box display="flex" justifyContent="space-between" pt={1} >
            <Box display="flex" alignItems="center" gap={0.5}>
                <AccessTime fontSize="small" />
                <Typography variant={"caption"}>Last Updated</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant={"caption"} >10 menit yang lalu</Typography>
            </Box>
        </Box>

    const TotalChapterFormatted = () =>
        <Box display="flex" justifyContent="space-between" pt={1} >
            <Box display="flex" alignItems="center" gap={0.5}>
                <Book fontSize="small" />
                <Typography variant={"caption"}>Total Chapter</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant={"caption"} >100 Chapter</Typography>
            </Box>
        </Box>


    const TitleFormatted = () =>
        <Link href={myUrl}>
            <a >
                <Typography variant={"h5"}>Eleceed</Typography>
            </a>
        </Link>

    return <Paper elevation={1} sx={{ display: "flex", width: "100%" }}>

        {type == "carousel" &&
            <Box sx={{ p: 1 }}>
                <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320} width={240} alt="Cover" />
                <TitleFormatted />
                <ChapterTimestamp />
            </Box>
        }
        {type == "top" &&
            <Box sx={{ p: 1 }}>
                <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320} width={240} alt="Cover" />

                <Box display="flex" alignItems="center" gap={0.5}>
                    {isFirst && <StarRate />}
                    <TitleFormatted />
                </Box>
                <AuthorFormatted />
                <GenreFormatted />
                <TotalChapterFormatted />
                <LastUpdatedFormatted />
            </Box>
        }
        {type == "detailed" &&
            <Box display="flex" width="100%">
                <Box display="flex" alignItems="center">
                    <Image src="https://cdn.gudangkomik.com/eleceed/thumb.jpg?width=240" height={320 / 2} width={240 / 2} alt="Cover" />
                </Box>
                <Box width={"100%"} p={1}>
                    <Box display="flex" alignItems="center">
                        <TitleFormatted />
                    </Box>
                    <Divider />
                    {[...Array(4)].map((_, i) =>
                        <ChapterTimestamp key={i} />
                    )}
                </Box>
            </Box>}
    </Paper>



}



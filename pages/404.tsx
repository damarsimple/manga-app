/* eslint-disable @next/next/no-img-element */
import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import { shuffle } from "lodash";

const GIF_GOMENASAI = [
    "/yukihana-lamy-bow.gif",
    "/gomennasai-lidara.gif",
    "/megumin-sad.gif",
    "/mina-aino-perdon-mina-aino-sorry.gif",
    "sorry.gif"
];

const GIF_SAYONARA = [
    "/bai-bai.gif",
    "/bye-good-bye.gif",
    "/gomennasai-lidara.gif",
];


export default function NotFound() {
    const [curState, setCurState] = useState<"gomenasai" | "sayonara">("gomenasai")

    const { push } = useRouter()


    return (
        <Paper sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>

            <Countdown
                date={Date.now() + 5000}
                onComplete={() => { setCurState("sayonara"); setTimeout(() => push("/"), 1500) }}
                renderer={({ hours, minutes, seconds, completed }) =>
                    <Typography>
                        {completed ? `👋 Sayonara 👋` : `😭😭 Maaf 🙇 Kontent Yang Kamu Cari Tidak Ditemukan 😭😭`}
                        <br />
                        {!completed && `Redirect kembali ke halaman utama dalam ⏳ ${seconds} detik`}
                    </Typography>}
            />
            <Box>
                <img src={shuffle(curState == "gomenasai" ? GIF_GOMENASAI : GIF_SAYONARA)[0]} alt="Gomenasai 🙇" />
            </Box>
        </Paper>
    )
}

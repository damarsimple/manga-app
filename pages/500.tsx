/* eslint-disable @next/next/no-img-element */
import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import { shuffle } from "lodash";

const GIF_ERROR = [
    "/korone-pensive.gif",
    "/oh-my-god-oh-my-gah.gif",
    "/jojo-om.gif",
    "/oh-no-red-faced.gif",
    "/worried-scared.gif"
];



export default function NotFound() {

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
                onComplete={() => { ; setTimeout(() => push("/"), 1500) }}
                renderer={({ hours, minutes, seconds, completed }) =>
                    <Typography>
                        {completed ? `👋 Sayonara 👋` : `Aduh Server Error 😱😱`}
                        <br />
                        {!completed && `Redirect kembali ke halaman utama dalam ⏳ ${seconds} detik`}
                    </Typography>}
            />
            <Box>
                <Typography>
                    Developer Saat Ini :
                </Typography>
                <img src={shuffle(GIF_ERROR)[0]} alt="Gomenasai 🙇" />
            </Box>
        </Paper>
    )
}

import { PaletteMode } from "@mui/material"
import create from "zustand"
import { persist } from "zustand/middleware"

import Cookies from "js-cookie";

interface ColorStore {
    mode: PaletteMode
    setMode: (mode: PaletteMode) => void;
    toggle: () => void
}

export const useColorMode = create<ColorStore>(persist(
    (set, get) => ({
        mode: "light",
        setMode: (mode) => set({ mode }),
        toggle: () => set({ mode: get().mode == "light" ? "dark" : "light" }),
    }),
    {
        name: "color-storage", // unique name
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
))

// export const useColorMode = (): ColorStore => {

//     return {
//         mode: Cookies.get("colorMode") as PaletteMode ?? "light",
//         setMode: (mode) => {
//             Cookies.set("colorMode", mode);
//             window.location.reload()

//         },
//         toggle: () => {

//             const isDark = Cookies.get("colorMode") == "dark";


//             Cookies.set("colorMode", isDark ? "light" : "dark");
//             window.location.reload()

//         }
//     }

// }
import Cookies from "js-cookie";


interface R18Store {
    mode: boolean;
    setMode: (mode: "enable" | "disable") => void;
    toggle: () => void
}

export const useR18 = (): R18Store => {

    return {
        mode: Cookies.get("r18") == "enable",
        setMode: (mode) => {
            Cookies.set("r18", `${mode}`);
            window.history.back()
        },
        toggle: () => {

            const mode = Cookies.get("r18") == "enable"
            Cookies.set("r18", mode ? "disable" : "enable");
            window.history.back()

        }
    }

}
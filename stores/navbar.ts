import create from "zustand";

export const useNavbarStore = create<{
  show: boolean;
  setShow: (show: boolean) => void;
  transparent: boolean;
  transparentMode: boolean;
  setTransparent: (show: boolean) => void;
  setTransparentMode: (show: boolean) => void;
}>((set) => ({
  show: true,
  setShow: (show) => set(() => ({ show })),
  transparentMode: false,
  transparent: false,
  setTransparent: (transparent) => set(() => ({ transparent })),
  setTransparentMode: (transparentMode) => set(() => ({ transparentMode })),
}));

import { create } from "zustand";
import { produce } from "immer";

type Store = {
  fontSize: string;
  setFontSize: (fontSize: string) => void;

  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
};

export const useSettingsStore = create<Store>()((set) => ({
  fontSize: "14",
  setFontSize: (fontSize) =>
    set(
      produce((state: Store) => {
        state.fontSize = fontSize;
      })
    ),

  fontFamily: "monospace",
  setFontFamily: (fontFamily) =>
    set(
      produce((state: Store) => {
        state.fontFamily = fontFamily;
      })
    ),
}));

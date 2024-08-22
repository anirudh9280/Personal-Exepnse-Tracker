import { create } from 'zustand'

interface StoreState {
    theme: string;
    setTheme: (value: string) => void;
}

const useStore = create<StoreState>((set) => ({
    theme: localStorage.getItem("theme") ?? "light",
    setTheme: (value: string) => set({ theme: value }),
}));

export default useStore;


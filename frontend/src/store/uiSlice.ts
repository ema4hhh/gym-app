import type { StateCreator } from "zustand";
import type { uiSlice, workoutSlice } from "./storeTypes";
import type { WEEK_DAYS } from "../../constants";

export const createUiSlice: StateCreator<
    workoutSlice & uiSlice,
    [],
    [],
    uiSlice
> = (set, get) => ({
    day: (new Date().getDay()) as keyof typeof WEEK_DAYS,
    currentWorkout: () => get().workout,
    updateDay: () => set({ day: (new Date().getDay()) as keyof typeof WEEK_DAYS })
})
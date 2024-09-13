import type { StateCreator } from "zustand";
import type { WEEK_DAYS } from "../../constants";
import type { workoutSlice } from "./workoutSlice";

export interface uiSlice {
    day: keyof typeof WEEK_DAYS,
    showWorkoutPreviewModal: boolean,
    showCurrentExerciseModal: boolean,
    updateDay: () => void,
    setShowWorkoutPreviewModal: (state?: boolean) => void,
    setShowCurrentExerciseModal: (state?: boolean) => void
}

export const createUiSlice: StateCreator<
    workoutSlice & uiSlice,
    [],
    [],
    uiSlice
> = (set, get) => ({
    day: (new Date().getDay()) as keyof typeof WEEK_DAYS,
    showWorkoutPreviewModal: false,
    showCurrentExerciseModal: false,
    updateDay: () => set({ day: (new Date().getDay()) as keyof typeof WEEK_DAYS }),
    setShowWorkoutPreviewModal: (newState) => {
        if (newState !== undefined) return set({ showWorkoutPreviewModal: newState })

        set({ showWorkoutPreviewModal: !(get().showWorkoutPreviewModal) })
    },
    setShowCurrentExerciseModal: (newState) => {
        if (newState !== undefined) return set({ showCurrentExerciseModal: newState })

        set({ showCurrentExerciseModal: !(get().showCurrentExerciseModal) })
    }
})
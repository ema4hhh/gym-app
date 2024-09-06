import type { StateCreator } from "zustand";
import type { Workout } from "./storeTypes";
import type { WEEK_DAYS } from "../../constants";
import type { workoutSlice } from "./workoutSlice";

export interface uiSlice {
    currentWorkout: () => Workout | undefined,
    day: keyof typeof WEEK_DAYS,
    showWorkoutPreviewModal: boolean,
    updateDay: () => void,
    setShowWorkoutPreviewModal: (state?: boolean) => void
}

export const createUiSlice: StateCreator<
    workoutSlice & uiSlice,
    [],
    [],
    uiSlice
> = (set, get, state) => ({
    day: (new Date().getDay()) as keyof typeof WEEK_DAYS,
    showWorkoutPreviewModal: false,
    currentWorkout: () => {
      const workout = state.getState().workout
      return workout;
    },
    updateDay: () => set({ day: (new Date().getDay()) as keyof typeof WEEK_DAYS }),
    setShowWorkoutPreviewModal: (newState) => {
        if (newState !== undefined) return set({ showWorkoutPreviewModal: newState })

        set({ showWorkoutPreviewModal: !(get().showWorkoutPreviewModal) })
    }
})
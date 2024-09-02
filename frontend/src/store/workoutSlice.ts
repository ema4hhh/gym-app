import type { StateCreator } from "zustand";
import { type uiSlice, type workoutSlice } from "./storeTypes";

export const createWorkoutSlice: StateCreator<
workoutSlice & uiSlice,
[],
[],
workoutSlice
> = (set) => ({
    workout: undefined,
    currentExercise: undefined,
    restime: 0,
    setWorkout: (newWorkout) => set({ workout: newWorkout }),
    nextExercise: (Exercise) => set({ currentExercise: Exercise}),
    setRestime: (time) => set({ restime: time })
})
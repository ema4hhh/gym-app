import type { StateCreator } from "zustand";
import type { Exercise, Workout } from "./storeTypes";
import type { uiSlice } from "./uiSlice";

export interface workoutSlice {
    workout: Workout | undefined,
    setWorkout: (newWorkout: Workout) => void,
    nextExercise: (Exercise: Exercise) => void,
    currentExercise: Exercise | undefined,
    restime: number,
    setRestime: (time: number) => void
}

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
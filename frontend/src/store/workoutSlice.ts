import type { StateCreator } from "zustand";
import type { Exercise, Workout } from "./storeTypes";
import type { uiSlice } from "./uiSlice";
import type { Routines } from "../../types";
import routines from "../../mocks/routines.json"

const parsedRoutines: Routines = JSON.parse(JSON.stringify(routines))
// needed for when the user goes to /app/workout without params
parsedRoutines.routines.unshift({id: undefined, name: "Welcome", exercises: undefined})

export interface workoutSlice {
    userRoutine : Routines | undefined,
    workout: Workout | undefined,
    currentExercise: Exercise | undefined,
    setsDone: number,
    exercisesDone: Exercise[] | undefined,
    restime: number,
    setExercisesDone: (Exercise: Exercise) => void,
    setSetsDone: () => void,
    setWorkout: (newWorkoutId: number) => void,
    setExercise: (Exercise: Exercise) => void,
    setRestime: (time: number) => void
}

export const createWorkoutSlice: StateCreator<
workoutSlice & uiSlice,
[],
[],
workoutSlice
> = (set, get) => ({
    userRoutine: parsedRoutines,
    workout: undefined,
    currentExercise: undefined,
    restime: 0,
    setsDone: 0,
    exercisesDone: undefined,
    setWorkout: (newWorkoutId) => {
        const matchedWorkout = get().userRoutine?.routines.find((workout) => (workout.id === newWorkoutId))

        if (!matchedWorkout || matchedWorkout.id === undefined) return

        set({ workout: matchedWorkout })
    },
    setExercise: (Exercise) => set({ currentExercise: Exercise}),
    setRestime: (time) => set({ restime: time }),
    setSetsDone: () => set({ setsDone: get().setsDone + 1 }),
    setExercisesDone: (Exercise) => {
        const exercisesDone = get().exercisesDone
        const newExercisesDone = exercisesDone ? [...exercisesDone, Exercise] : [Exercise]
        set({ exercisesDone: newExercisesDone })
    }
})
import { createStore } from "zustand/vanilla";
import { type uiSlice, type workoutSlice } from "./storeTypes";
import { createWorkoutSlice } from "./workoutSlice";
import { createUiSlice } from "./uiSlice";

const gymStore = createStore<uiSlice & workoutSlice>()((...a) => ({
    ...createWorkoutSlice(...a),
    ...createUiSlice(...a)
}))

export default gymStore
import { createStore } from "zustand/vanilla";
import { createWorkoutSlice, type workoutSlice } from "./workoutSlice";
import { createUiSlice, type uiSlice } from "./uiSlice";
import { devtools, persist } from "zustand/middleware";

const gymStore = createStore<workoutSlice & uiSlice>()(
    devtools(
      persist(
        (...a) => ({
          ...createWorkoutSlice(...a),
          ...createUiSlice(...a)
        }),
        {
          name: "gym-store",
        }
      ),
    )
)

export default gymStore 
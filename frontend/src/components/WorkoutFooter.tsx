import { useStore } from "zustand";
import gymStore from "../store/gymStore";

function WorkoutFooter() {
  const { workout, currentExercise, restime } = useStore(gymStore);
  
  if (workout === undefined) return <></>;
  
  return (
    <footer className="flex items-center justify-center gap-2 w-full bg-slate-200 fixed bottom-0 left-0 right-0">
        <h5>{workout.name}:</h5>
        <p>now doing: {currentExercise?.name || "nothing"}</p>
        <p>Restime: {restime}</p>
        <button className="border border-slate-900">Start</button>
        <button className="border border-slate-900">Skip</button>
    </footer>
  )
}

export default WorkoutFooter;

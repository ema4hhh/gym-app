import { useStore } from "zustand"
import gymStore from "../store/gymStore";

function CurrentExerciseModal() {
  const { currentExercise, restime, setsDone, showCurrentExerciseModal, setShowCurrentExerciseModal } = useStore(gymStore)
  
  const handleClose = () => setShowCurrentExerciseModal(false)
  
  return (
    <dialog open={showCurrentExerciseModal}>
      <h3>{currentExercise?.name}</h3>
      <p>Rest time: {restime}</p>
      <p>Sets: {setsDone}/{currentExercise?.sets}</p>
      <button onClick={handleClose}>Close</button>
    </dialog>
  )
}

export default CurrentExerciseModal;

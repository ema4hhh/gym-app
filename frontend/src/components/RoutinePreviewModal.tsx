import gymStore from "../store/gymStore";
import { useStore } from "zustand";

function RoutinePreviewModal() {
    const { showWorkoutPreviewModal: showModal, workout, setShowWorkoutPreviewModal } = useStore(gymStore) 

    const handleClick = () => {
        setShowWorkoutPreviewModal();
    }
    

    if(!showModal || workout === undefined) {        
        return <></>
    }

    return (
        <div>
            <h4>{workout.name}</h4>
            <article>{workout.routine.map((exercise) => {
                const {name, musclesWorked} = exercise;

                return (
                    <div key={exercise.id}>
                        <h5>{name}</h5>
                        <p>{musclesWorked}</p>
                    </div>
                )
                
            })}
                <button onClick={handleClick}>Close</button>
            </article>
        </div>
    )
}

export default RoutinePreviewModal;

export enum EQUIPMENT {
    DUMBELL,
    BARBELL,
    MACHINE,
    BODYWEIGTH
  }
  
export interface Exercise {
id: number,
name: string,
musclesWorked: string[],
equipment: EQUIPMENT
}

export interface RestDay {
    id: 0,
    name: "Rest day 🥳"
    musclesWorked: "Full body"
    equipment: EQUIPMENT.BODYWEIGTH
}

export interface Workout {
    id: number,
    name: string,
    routine: Exercise[] | RestDay
}

interface uiSlice {
    currentWorkout: () => Workout | undefined,
    day: keyof typeof WEEK_DAYS,
    updateDay: () => void
}

export interface workoutSlice {
    workout: Workout | undefined,
    setWorkout: (newWorkout: Workout) => void,
    nextExercise: (Exercise: Exercise) => void,
    currentExercise: Exercise | undefined,
    restime: number,
    setRestime: (time: number) => void
}


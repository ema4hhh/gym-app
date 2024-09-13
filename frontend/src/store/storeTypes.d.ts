import type { WEEK_DAYS } from "../../constants"

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
    equipment: EQUIPMENT,
    weight?: number,
    reps?: number,
    time?: number,
    sets: number,
}

export interface RestDay {
    id: 0,
    name: "Rest day 🥳"
}

export interface Workout {
    id: number,
    name: string,
    exercises: Exercise[]
}

export interface WelcomeWorkout extends Workout {
    id: undefined
    exercises: undefined
}

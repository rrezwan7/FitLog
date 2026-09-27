"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

type WorkoutContextType = {
    todaysPlan: Workout[];
    savedWorkouts: Workout[];

    addToTodaysPlan: (workout: Workout) => void;
    removeFromTodaysPlan: (workoutId: number) => void;

    saveForLater: (workout: Workout) => void;
    removeFromSaved: (workoutId: number) => void;

    isInTodaysPlan: (workoutId: number) => boolean;
    isSaved: (workoutId: number) => boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

export function WorkoutProvider({ children }: { children: ReactNode }) {

    const [todaysPlan, setTodaysPlan] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // Load data from localStorage
    useEffect(() => {
        const storedPlan = localStorage.getItem("todaysPlan");
        const storedSaved = localStorage.getItem("savedWorkouts");

        if (storedPlan) {
            setTodaysPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSavedWorkouts(JSON.parse(storedSaved));
        }
        setIsLoaded(true);
    }, []);

    // Save today's plan
    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            "todaysPlan",
            JSON.stringify(todaysPlan)
        );
    }, [todaysPlan, isLoaded]);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            "savedWorkouts",
            JSON.stringify(savedWorkouts)
        );
    }, [savedWorkouts, isLoaded]);

    // Add workout to today's plan
    function addToTodaysPlan(workout: Workout) {

        const alreadyExists = todaysPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return;
        }

        setTodaysPlan([...todaysPlan, workout]);
    }

    // Remove workout from today's plan
    function removeFromTodaysPlan(workoutId: number) {
        setTodaysPlan(
            todaysPlan.filter((workout) => workout.id !== workoutId)
        );
    }

    // Save workout
    function saveForLater(workout: Workout) {

        const alreadyExists = savedWorkouts.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return;
        }

        setSavedWorkouts([...savedWorkouts, workout]);
    }

    // Remove saved workout
    function removeFromSaved(workoutId: number) {
        setSavedWorkouts(
            savedWorkouts.filter((workout) => workout.id !== workoutId)
        );
    }

    // Check today's plan
    function isInTodaysPlan(workoutId: number) {
        return todaysPlan.some(
            (workout) => workout.id === workoutId
        );
    }

    // Check saved workouts
    function isSaved(workoutId: number) {
        return savedWorkouts.some(
            (workout) => workout.id === workoutId
        );
    }

    return (
        <WorkoutContext.Provider
            value={{
                todaysPlan,
                savedWorkouts,
                addToTodaysPlan,
                removeFromTodaysPlan,
                saveForLater,
                removeFromSaved,
                isInTodaysPlan,
                isSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
}

export function useWorkout() {

    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
}
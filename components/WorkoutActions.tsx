"use client";

import type { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

type WorkoutActionsProps = {
    workout: Workout;
};

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {

    const {
        addToTodaysPlan,
        saveForLater,
        isInTodaysPlan,
        isSaved,
    } = useWorkout();

    const alreadyInPlan = isInTodaysPlan(workout.id);
    const alreadySaved = isSaved(workout.id);

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
                onClick={() => addToTodaysPlan(workout)}
                disabled={alreadyInPlan}
                className="flex-1 py-3 px-6 rounded-full bg-[#ccff00] text-[#15171d] font-bold hover:bg-[#b8e600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {alreadyInPlan
                    ? "Added to Today's Plan"
                    : "Add to Today's Plan"}
            </button>

            <button
                onClick={() => saveForLater(workout)}
                disabled={alreadySaved}
                className="flex-1 py-3 px-6 rounded-full border border-gray-700 text-white font-bold hover:bg-[#15171d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {alreadySaved
                    ? "Saved"
                    : "Save for Later"}
            </button>

        </div>
    );
}
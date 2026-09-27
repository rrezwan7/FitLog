"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkoutCard from "@/components/WorkoutCard";
import { useWorkout } from "@/context/WorkoutContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MyPlanPage() {
    const searchParams = useSearchParams();

    const activeTab =
        searchParams.get("tab") === "saved"
            ? "saved"
            : "plan";
    const [sortBy, setSortBy] = useState("duration");

    const {
        todaysPlan,
        savedWorkouts,
        removeFromTodaysPlan,
        removeFromSaved,
    } = useWorkout();

    const currentWorkouts =
        activeTab === "plan"
            ? todaysPlan
            : savedWorkouts;

    const totalExercises = currentWorkouts.length;

    const totalMinutes = currentWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = currentWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        return b.duration - a.duration;
    });

    return (
        <main className="min-h-screen bg-[#0b0c10] text-white">
            <Header />

            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        My Workouts
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Manage your workout plan and saved workouts.
                    </p>
                </div>

                {/* Tabs */}
                {/* Workout Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#15171d] border border-gray-800 rounded-2xl p-5">
                        <p className="text-gray-400 text-sm">
                            Total Exercises
                        </p>

                        <p className="text-3xl font-bold text-white mt-2">
                            {totalExercises}
                        </p>
                    </div>

                    <div className="bg-[#15171d] border border-gray-800 rounded-2xl p-5">
                        <p className="text-gray-400 text-sm">
                            Total Minutes
                        </p>

                        <p className="text-3xl font-bold text-white mt-2">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="bg-[#15171d] border border-gray-800 rounded-2xl p-5">
                        <p className="text-gray-400 text-sm">
                            Total Calories
                        </p>

                        <p className="text-3xl font-bold text-white mt-2">
                            {totalCalories}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 mb-8 border-b border-gray-800">
                    <Link
                        href="/my-plan?tab=plan"
                        className={`px-5 py-3 font-bold text-sm ${activeTab === "plan"
                            ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                    <Link
                        href="/my-plan?tab=saved"
                        className={`px-5 py-3 font-bold text-sm ${activeTab === "saved"
                            ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Saved
                    </Link>
                </div>

                {/* Dropdown for sorting */}
                <div className="flex justify-end mb-6">
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(event) => setSortBy(event.target.value)}
                            className="appearance-none bg-[#15171d] border border-gray-700 text-white rounded-full px-5 py-2 pr-10 text-sm font-medium outline-none cursor-pointer"
                        >
                            <option value="duration">Sort By: Duration</option>
                            <option value="calories">Sort By: Calories</option>
                            <option value="rating">Sort By: Rating</option>
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            ▼
                        </span>
                    </div>
                </div>

                {/* My Plan */}
                {activeTab === "plan" && (
                    <>
                        {todaysPlan.length === 0 && (
                            <div className="border border-gray-800 rounded-2xl p-10 text-center">
                                <h2 className="text-xl font-bold">
                                    No workouts in your plan
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    Add workouts from the workout details page.
                                </p>
                            </div>
                        )}

                        {todaysPlan.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sortedWorkouts.map((workout) => (
                                    <div key={workout.id}>
                                        <WorkoutCard workout={workout} />

                                        <button
                                            onClick={() =>
                                                removeFromTodaysPlan(
                                                    workout.id
                                                )
                                            }
                                            className="w-full mt-3 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                                        >
                                            Remove from Plan
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* Saved */}
                {activeTab === "saved" && (
                    <>
                        {savedWorkouts.length === 0 && (
                            <div className="border border-gray-800 rounded-2xl p-10 text-center">
                                <h2 className="text-xl font-bold">
                                    No saved workouts
                                </h2>

                                <p className="text-gray-400 mt-2">
                                    Save a workout to find it here later.
                                </p>
                            </div>
                        )}

                        {savedWorkouts.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sortedWorkouts.map((workout) => (
                                    <div key={workout.id}>
                                        <WorkoutCard workout={workout} />

                                        <button
                                            onClick={() =>
                                                removeFromSaved(workout.id)
                                            }
                                            className="w-full mt-3 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                                        >
                                            Remove from Saved
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </section>

            <Footer />
        </main>
    );
}
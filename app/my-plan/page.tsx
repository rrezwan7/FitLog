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


    const {
        todaysPlan,
        savedWorkouts,
        removeFromTodaysPlan,
        removeFromSaved,
    } = useWorkout();

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
                                {todaysPlan.map((workout) => (
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
                                {savedWorkouts.map((workout) => (
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
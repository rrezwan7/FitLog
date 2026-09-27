import Image from "next/image";
import type { Workout } from "@/types/workout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkoutActions from "@/components/WorkoutActions";

type WorkoutDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {

    const { id } = await params;

    const response = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    const workout: Workout = await response.json();

    return (
        <main className="min-h-screen bg-[#0b0c10] text-white">
            <Header />

            <section className="max-w-7xl mx-auto px-4 py-10">

                {/* Main Workout Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT - IMAGE */}
                    <div>
                        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-gray-800">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT - WORKOUT INFORMATION */}
                    <div>

                        {/* Workout Name */}
                        <h1 className="text-4xl font-bold">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 leading-7 mt-4">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="bg-[#ccff00] text-xs font-bold text-[#15171d] rounded-2xl px-3 py-1 uppercase"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Workout Information Table */}
                        <div className="mt-8 border bg-[#15171d] border-gray-800 rounded-2xl overflow-hidden">

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Equipment
                                </div>
                                <div className="p-4 text-white">
                                    {workout.equipment}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Difficulty
                                </div>
                                <div className="p-4 text-white">
                                    {workout.difficulty}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Sets
                                </div>
                                <div className="p-4 text-white">
                                    {workout.sets}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Reps
                                </div>
                                <div className="p-4 text-white">
                                    {workout.reps}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Duration
                                </div>
                                <div className="p-4 text-white">
                                    {workout.duration} min
                                </div>
                            </div>

                            <div className="grid grid-cols-2 border-b border-gray-800">
                                <div className="p-4 text-gray-400">
                                    Calories
                                </div>
                                <div className="p-4 text-white">
                                    {workout.caloriesBurned} Kcal
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className="p-4 text-gray-400">
                                    Rating
                                </div>
                                <div className="p-4 text-white">
                                    {workout.rating}
                                </div>
                            </div>

                        </div>
                        {/* Instructions */}
                        <div className="mt-12">

                            <h2 className="text-2xl font-bold mb-5">
                                Instructions
                            </h2>

                            <ol className="space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-400"
                                    >
                                        <span className="flex-shrink-0 w-7 h-7  flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                            <span>.</span>
                                        </span>

                                        <span className="leading-7">
                                            {instruction}
                                        </span>
                                    </li>
                                ))}
                            </ol>

                        </div>
                        {/* Action Buttons */}
                        <WorkoutActions workout={workout} />

                    </div>
                </div>



                {/* Action Buttons */}


            </section>
            <Footer />

        </main>
    );
}
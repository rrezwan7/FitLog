import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="block bg-[#15171d] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors"
        >

            {/* Image */}
            <div className="relative h-56 w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    className="object-cover"
                    fill
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="bg-[#ccff00] text-xs font-bold text-[#15171d] border rounded-2xl px-2 py-1 uppercase"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mt-2">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <div className="text-sm text-gray-400">
                    {workout.equipment}
                </div>

                {/* Workout Info */}
                <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
                    <span>{workout.duration} min</span>
                    <span>•</span>
                    <span>{workout.caloriesBurned} Kcal</span>
                    <span>•</span>
                    <span>{workout.rating}</span>
                </div>

            </div>
        </Link>
    );
}
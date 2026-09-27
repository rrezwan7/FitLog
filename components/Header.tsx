"use client";
import { useWorkout } from "@/context/WorkoutContext";
import Image from "next/image";
import logo from "@/src/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const { todaysPlan, savedWorkouts } = useWorkout();
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-md border-b border-gray-800/80 px-4 lg:px-12 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center"
                >
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={140}
                        height={40}
                        className="h-10 w-auto px-2"
                    />

                    <span>
                        <h1 className="text-2xl font-bold">
                            FITLOG
                        </h1>
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-2 bg-[#121318] p-1.5 rounded-full border border-gray-800/60">

                    <Link
                        href="/"
                        className={`px-5 py-1.5 rounded-full text-sm font-bold transition-colors ${pathname === "/"
                            ? "bg-[#ccff00] text-black"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`px-5 py-1.5 rounded-full text-sm font-bold transition-colors ${pathname === "/my-plan"
                            ? "bg-[#ccff00] text-black"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>

                </nav>

                {/* Plan and Saved */}
                <div className="flex items-center gap-3">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 bg-[#ccff00] text-black font-bold px-3 py-1.5 rounded-full text-xs"
                    >
                        <span>Plan</span>

                        <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[11px]">
                            {todaysPlan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan?tab=saved"
                        className="flex items-center gap-2 border border-gray-700 text-gray-300 font-bold px-3 py-1.5 rounded-full text-xs"
                    >
                        <span>Saved</span>

                        <span className="bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-[11px]">
                            {savedWorkouts.length}
                        </span>
                    </Link>

                </div>

            </div>
        </header>
    );
}
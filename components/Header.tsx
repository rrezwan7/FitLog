import Image from "next/image";
import logo from "@/src/assets/logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-md border-b border-gray-800/80 px-4 lg:px-12 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={140}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-2 bg-[#121318] p-1.5 rounded-full border border-gray-800/60">
                    <button className="px-5 py-1.5 rounded-full text-sm font-bold bg-[#ccff00] text-black">
                        Workouts
                    </button>

                    <button className="px-5 py-1.5 rounded-full text-sm font-bold text-gray-400 hover:text-white transition-colors">
                        My Plan
                    </button>
                </nav>

                {/* Plan and Saved */}
                <div className="flex items-center gap-3">

                    <button className="flex items-center gap-2 bg-[#ccff00] text-black font-bold px-3 py-1.5 rounded-full text-xs">
                        <span>Plan</span>

                        <span className="bg-black text-[#ccff00] w-5 h-5 rounded-full flex items-center justify-center text-[11px]">
                            0
                        </span>
                    </button>

                    <button className="flex items-center gap-2 border border-gray-700 text-gray-300 font-bold px-3 py-1.5 rounded-full text-xs">
                        <span>Saved</span>

                        <span className="bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-[11px]">
                            0
                        </span>
                    </button>

                </div>

            </div>
        </header>
    );
}
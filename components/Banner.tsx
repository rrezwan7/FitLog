import Image from "next/image";
import bannerImage from "@/src/assets/banner.png";

export default function Banner() {
    return (
        <section className="px-4 lg:px-12 py-8 lg:py-12">
            <div className="max-w-7xl mx-auto">

                <div className="bg-[#15171d] border border-gray-800 rounded-2xl overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px]">

                        {/* Left Side - Text */}
                        <div className="px-6 py-12 lg:px-12 lg:py-16">

                            <p className="text-[#ccff00] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                                Workout Library
                            </p>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] uppercase">
                                Train with intent. Log <br /> Log Every Set.
                            </h1>

                            <p className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed">
                                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                            </p>

                            <button className="mt-8 bg-[#ccff00] hover:bg-[#b8e600] text-black font-black uppercase px-7 py-3 rounded-full transition-colors">
                                Browse Workouts
                            </button>

                        </div>

                        {/* Right Side - Image */}
                        <div className="relative h-[350px] lg:h-[500px] flex items-end justify-center">

                            <Image
                                src={bannerImage}
                                alt="Fitness training"
                                fill
                                priority
                                className="object-contain object-bottom"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
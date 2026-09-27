import Image from "next/image";
import logo from "@/src/assets/logo.png";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800/80 mt-16 py-8 bg-[#0b0c10]">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Logo / Copyright */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="FitLog"
                            width={140}
                            height={40}
                            className="h-10 w-auto px-2"
                        />
                        <span className="text-lg font-bold"> FITLOG</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-bold">
                        © 2026 FitLog - Workout Library. Train hard, log honest.
                    </div>

                </div>

            </div>
        </footer>
    );
}
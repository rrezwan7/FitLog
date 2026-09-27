import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export default async function Home() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await response.json();

  return (
    <main className="min-h-screen bg-[#0b0c10]">
      <Header />

      <Banner />

      {/* Workout Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Explore Workouts
          </h2>

          <p className="text-gray-400 mt-2">
            Choose a workout and start training.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
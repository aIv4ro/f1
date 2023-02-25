import { Card } from "@/components/Card";
import { NextRace } from "@/components/NextRace";
import { Race } from "@/components/race";
import { getCurrentSchedule } from "@/services/schedule"

export default async function Home() {
	const schedule = await getCurrentSchedule();
	const nextRace = schedule.races.find(race => {
		return new Date() <= race.dateTime;
	})

  return (
		<section className="flex gap-3 flex-col">
			<h1 className="text-2xl font-semibold text-center">
				Calendario F1 {schedule.season}	
			</h1>
			<h2 className="text-xl">
				Siguiente carrera
			</h2>
			{nextRace && <NextRace race={nextRace} />}
			<h2 className="text-xl">
				Calendario
			</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{schedule.races.map(race => {
					return (
						<li key={race.round}>
							<Card>
								<Race race={race} />
							</Card>
						</li>
					);
				})}
			</ul>
		</section>
  )
}

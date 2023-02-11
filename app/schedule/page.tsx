import { Race } from "@/components/race";
import { getCurrentSchedule } from "@/services/schedule"

export default async function Home() {
	const schedule = await getCurrentSchedule();
  return (
		<section>
			<h1 className="text-2xl font-semibold mb-5 text-center">F1 {schedule.season} SCHEDULE</h1>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{schedule.races.map(race => {
					return (
						<li key={race.round}><Race race={race} /></li>
					);
				})}
			</ul>
		</section>
  )
}

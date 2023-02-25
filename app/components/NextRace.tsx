import { RaceI } from "types/race";
import { Card } from "./Card";
import { Race } from "./race";
import { SessionTime } from "./SessionTime";
import Image from "next/image";

export function NextRace(
	{race}: {race: RaceI}
) {
	const sessions = [
		{ dateTime: race.firstPractice.dateTime, name: 'FP1' }, 
		{ dateTime: race.secondPractice.dateTime, name: 'FP2' }, 
		race.thirdPractice && { dateTime: race.thirdPractice.dateTime, name: 'FP3' }, 
		{ dateTime: race.qualifying.dateTime, name: 'Qualy' }, 
		{ dateTime: race.dateTime, name: 'Race' }
	].filter(session => session).sort((a, b) => {
		return a.dateTime.getTime() - b.dateTime.getTime();
	});

	return (
		<Card>
			<>
				<Race race={race} />
				<div className="flex justify-between items-center border-t-2 mt-2 pt-2">
					<ul className="flex flex-col">
						{sessions.map(session => (
						<li key={session.name} className="text-[#999999] font-semibold text-sm grid grid-cols-2">
							<SessionTime date={session.dateTime} name={session.name} />
						</li>
						))}
					</ul>
					{
						/*
						<picture>
							<Image alt="race track" width="40" height="40" src="" />
						</picture>
						*/
					}
				</div>
			</>
		</Card>
	)
}
'use-client';
import { RaceI } from "types/race";
import { FlagIcon } from "./icons/flags/flagIcon";

const options = { 
	year: "numeric",
	month: "short",
	day: "2-digit",
} as Intl.DateTimeFormatOptions;

export function Race(
	{race}: {race: RaceI}
) {
	const {location} = race.circuit;
	const startDate = race.firstPractice.dateTime.toLocaleDateString(undefined, options).toUpperCase();
	const endDate = race.dateTime.toLocaleDateString(undefined, options).toUpperCase();

	return (
		<header className="flex items-center justify-between">
			<div>
				<h3 className="text-lg">{race.round}. {race.name}</h3>
				<p className="text-[#999999] font-semibold text-sm">
					{startDate} - {endDate}
				</p>
			</div>
			<FlagIcon className="w-10 h-10" flagName={location.country} />
		</header>
	)
}
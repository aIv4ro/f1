import { RaceI } from "../types/race";
import { Schedule } from "../types/schedule";

const currentScheduleUrl = 'https://ergast.com/api/f1/2023.json'

export async function getCurrentSchedule(): Promise<Schedule> {
	const res = await fetch(currentScheduleUrl);
	const schedule = await res.json();
	return mapSchedule(schedule);
}

function mapSchedule(schedule: any): Schedule {
	const {
		MRData: { RaceTable: { season, Races: races } }
	} = schedule;
	
	return {
		season,
		races: races.map(mapScheduleRace)
	};
}

function mapScheduleRace(race: any): RaceI {
	const {
		round, raceName,
		Circuit: {circuitId: id, circuitName, Location: location},
		date, time, FirstPractice: firstPractice, SecondPractice: secondPractice,
		ThirdPractice: thirdPractice, Sprint: sprint, Qualifying: qualifying  
	} = race;
	return {
		round, name: raceName, circuit: {id, name: circuitName, location},
		date, time, dateTime: new Date(`${date}T${time}`),
		firstPractice: {...firstPractice, dateTime: new Date(`${firstPractice.date}T${firstPractice.time}`)}, 
		secondPractice: {...secondPractice, dateTime: new Date(`${secondPractice.date}T${secondPractice.time}`)}, 
		thirdPractice: thirdPractice && {...thirdPractice, dateTime: new Date(`${thirdPractice.date}T${thirdPractice.time}`)}, 
		sprint: sprint && {...sprint, dateTime: new Date(`${sprint.date}T${sprint.time}`)}, 
		qualifying: {...qualifying, dateTime: new Date(`${qualifying.date}T${qualifying.time}`)}
	};
}
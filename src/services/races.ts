import data from '../../data/f1-2023.json'
import f2Data from '../../data/f2-2023.json'
import f3Data from '../../data/f3-2023.json'
import { Race } from '../types/f1/race.model'
import { F2Race } from '../types/f2/f2-race.model'

export const races = data.races.map(race => new Race(race))
export const f2Races = f2Data.races.map(race => new F2Race(race))
export const f3Races = f3Data.races.map(race => new F2Race(race))

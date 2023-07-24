import { f2Races } from './races'

export function getNextF2Race () {
  const today = new Date()
  return f2Races
    .sort((a, b) => a.sessions.feature.getTime() - b.sessions.feature.getTime())
    .find(race => race.sessions.feature.getTime() > today.getTime())
}

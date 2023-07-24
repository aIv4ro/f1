import { f3Races } from './races'

export function getNextF3Race () {
  const today = new Date()
  return f3Races
    .sort((a, b) => a.sessions.feature.getTime() - b.sessions.feature.getTime())
    .find(race => race.sessions.feature.getTime() > today.getTime())
}

import { races } from './races'

export function getNextF1Race () {
  const today = new Date()
  return races
    .sort((a, b) => a.sessions.gp.getTime() - b.sessions.gp.getTime())
    .find(race => race.sessions.gp.getTime() > today.getTime())
}

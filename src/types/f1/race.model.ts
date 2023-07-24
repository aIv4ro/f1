import { type IRace } from './race.interface'
import { RaceSessions } from './race-sessions.model'

export class Race {
  name: string
  locaton: string
  latitude: number
  longitude: number
  round: number
  slug: string
  key: string
  sessions: RaceSessions

  constructor (race: IRace) {
    this.name = race.name
    this.locaton = race.location
    this.latitude = race.latitude
    this.longitude = race.longitude
    this.round = race.round
    this.slug = race.slug
    this.key = race.key
    this.sessions = new RaceSessions(race.sessions)
  }
}

import { type IF2Race } from './f2-race.interface'
import { F2RaceSessions } from './f2-race-sessions.model'

export class F2Race {
  name: string
  locaton: string
  latitude: number
  longitude: number
  round: number
  slug: string
  key: string
  sessions: F2RaceSessions

  constructor (race: IF2Race) {
    this.name = race.name
    this.locaton = race.location
    this.latitude = race.latitude
    this.longitude = race.longitude
    this.round = race.round
    this.slug = race.slug
    this.key = race.key
    this.sessions = new F2RaceSessions(race.sessions)
  }
}

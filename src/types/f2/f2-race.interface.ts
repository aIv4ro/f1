import { type IF2RaceSessions } from './f2-race-sessions.interface'

export interface IF2Race {
  name: string
  location: string
  latitude: number
  longitude: number
  round: number
  slug: string
  key: string
  sessions: IF2RaceSessions
}

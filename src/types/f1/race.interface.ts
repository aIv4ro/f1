import { type IRaceSessions } from './race-sessions.interface'

export interface IRace {
  name: string
  location: string
  latitude: number
  longitude: number
  round: number
  slug: string
  key: string
  sessions: IRaceSessions
}

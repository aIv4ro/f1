import { type Nullable } from '../nullable'
import { type IRaceSessions } from './race-sessions.interface'

export class RaceSessions {
  fp1: Date
  fp2?: Date
  fp3?: Date
  qualifying: Date
  gp: Date
  sprintQualifying?: Date
  sprint?: Date

  constructor (session: IRaceSessions) {
    this.fp1 = new Date(session.fp1)
    this.fp2 = session.fp2 != null ? new Date(session.fp2) : undefined
    this.fp3 = session.fp3 != null ? new Date(session.fp3) : undefined
    this.qualifying = new Date(session.qualifying)
    this.gp = new Date(session.gp)
    this.sprintQualifying = session.sprintQualifying != null ? new Date(session.sprintQualifying) : undefined
    this.sprint = session.sprint != null ? new Date(session.sprint) : undefined
  }

  getOrderedSessions () {
    const sessions = [
      { name: 'fp1', date: this.fp1 },
      { name: 'fp2', date: this.fp2 },
      { name: 'fp3', date: this.fp3 },
      { name: 'qualifying', date: this.qualifying },
      { name: 'gp', date: this.gp },
      { name: 'sprintQualifying', date: this.sprintQualifying },
      { name: 'sprint', date: this.sprint }
    ].filter(session => session.date != null)

    return sessions
      .filter(isSessionValid)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
  }
}

interface Session {
  name: string
  date: Date
}

function isSessionValid (session: { name: string, date: Nullable<Date> }): session is Session {
  return session.date != null
}

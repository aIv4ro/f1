import { type IF2RaceSessions } from './f2-race-sessions.interface'

export class F2RaceSessions {
  practice: Date
  qualifying: Date
  sprint: Date
  feature: Date

  constructor (session: IF2RaceSessions) {
    this.practice = new Date(session.practice)
    this.qualifying = new Date(session.qualifying)
    this.feature = new Date(session.feature)
    this.sprint = new Date(session.sprint)
  }

  getOrderedSessions () {
    return [
      { name: 'practice', date: this.practice },
      { name: 'qualifying', date: this.qualifying },
      { name: 'sprint', date: this.sprint },
      { name: 'gp', date: this.feature }
    ]
  }
}

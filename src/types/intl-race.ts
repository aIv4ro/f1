import locales from '../../data/locales.json'

const racesNames = locales.races as Record<string, string>
const sessinsNames = locales.schedule as Record<string, string>

export class IntlRace {
  getRaceName (key: string) {
    console.log(key)
    return racesNames[key] ?? key
  }

  getSessionName (sessionKey: string) {
    return sessinsNames[sessionKey] ?? sessionKey
  }
}

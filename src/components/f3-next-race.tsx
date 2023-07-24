import { useMemo } from 'react'
import { Card, Text, List, ListItem } from '@tremor/react'
import { IntlRace } from '../types/intl-race'
import { getNextF3Race } from '../services/getNextF3Race'

export function F3NextRace () {
  const race = useMemo(getNextF3Race, [])

  if (race == null) {
    return (
      <>
        <h1 className='text-xl font-semibold'>F3 Seasson has finished</h1>
      </>
    )
  }

  const intlRace = new IntlRace()
  const sessions = race.sessions.getOrderedSessions()

  return (
    <Card className='max-w-lg'>
      <header>
        <h2>
          <Text className='text-tremor-title font-semibold'>F3</Text>
        </h2>
        <h3>
          <Text className='text-tremor-title font-semibold'>{intlRace.getRaceName(race.key)}</Text>
        </h3>
      </header>
      <List>
        {sessions.map((session) => (
          <ListItem key={session.name}>
            <span className='max-w-[15ch] overflow-hidden text-clip'>{intlRace.getSessionName(session.name)}</span>
            <span>{session.date.toLocaleString()}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

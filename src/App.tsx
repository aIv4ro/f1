import { F1NextRace } from './components/f1-next-race'
import { F2NextRace } from './components/f2-next-race'
import { F3NextRace } from './components/f3-next-race'

function App () {
  return (
    <main className='flex flex-col gap-3 p-5'>
      <section className='flex justify-center'>
        <F1NextRace />
      </section>
      <section className='flex justify-center'>
        <F2NextRace />
      </section>
      <section className='flex justify-center'>
        <F3NextRace />
      </section>
    </main>
  )
}

export default App

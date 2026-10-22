import { useState } from 'react'
import { persons } from './data'
import Header from './components/Header'
import Counter from './components/Counter'
import PersList from './components/PersList'
import PersCard from './components/PersCard'

function App() {
  const [pers, setPers] = useState(persons)

  return (
    <div className='bg-linear-to-tr from-pink-600 to-purple-600 min-h-screen'>
      <Header />
      <Counter count={pers.length}/>
      {pers.length!=0 && <PersList pers={pers} setPers={setPers}/>}
      <PersCard/>
    </div>
  )
}

export default App
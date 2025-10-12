import '../styles/App.css'
import { Menu } from './Menu'
import { Dashboard } from './Dashboard'
import { Social } from './Social'

function App() {

  return (
    <div className='body-wrapper'>
      <Menu />
      <Dashboard />
      <Social />
    </div>
  )
}

export default App

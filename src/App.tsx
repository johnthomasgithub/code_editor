import Loader from './components/Loader/Loader'
import { Landing } from './pages/Landing'
import './styles/globalstyle.scss'

export const App = () => {
  return (
    <div className="app-parent">
      <Landing />
    </div>
  )
}

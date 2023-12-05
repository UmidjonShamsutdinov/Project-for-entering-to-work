
import './App.css'
import DesignUpdates from './components/design-updates/DesignUpdates'
import Jobs from './components/jobs/Jobs'
import NewReleased from './components/new-released/NewReleased'
import Spotlights from './components/spotlights/Spotlights'
import Tools from './components/tools/Tools'
import Nav from './layout/nav/Nav'

function App() {

  return (
      <>
        <Nav/>
        <NewReleased/>
        <Spotlights/>
        <DesignUpdates/>
        <div className='double-component container'>
          <Tools/>
          <Jobs/>
        </div>
      </>
  )
}

export default App

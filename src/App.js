import {Route, Switch} from 'react-router-dom'

import YourPage from './components/YourPage'
import AllPage from './components/AllPage'
import BlockedPage from './components/BlockedPage'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={YourPage} />
    <Route exact path="/all" component={AllPage} />
    <Route exact path="/blocked" component={BlockedPage} />
  </Switch>
)

export default App

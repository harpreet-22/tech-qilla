import Banner from './Banner';
import Home from './Home';
import Navbar from './Navbar';
import AppointmentPage from './AppointmentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Banner/>
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>
            <Route path = '/appointment'>
              <AppointmentPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

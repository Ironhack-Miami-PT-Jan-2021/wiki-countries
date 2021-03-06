import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import countries from './countries.json';
import {Switch, Route} from 'react-router-dom';
import CountryDetails from './components/countryDetails/CountryDetails';

function App() {

  return (
    <div>
      <div className="left">
        <Navbar countries = {countries} />
      </div>

      <div className="right">
        <Switch>
          <Route exact path="/countries/:code" render={(props)=>{ return <CountryDetails {...props} countries={countries} /> }} />
        </Switch>
      </div>

 
    </div>
  );
}

export default App;

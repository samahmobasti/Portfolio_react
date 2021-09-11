
import Header from './Component/Header';
import {BrowserRouter as Router ,Route ,Switch, NavLink} from 'react-router-dom'
import PageOne from './Pages/PageOne.js'
import Pagetwo from './Pages/Pagetwo.js'
function App() {
  return (
    <div className="App">
    <Router>
   {/* <Header/> */}
 <Switch>
 
   <Route path='/Pagetwo' component={Pagetwo}/>
   <Route path='/' component={PageOne}/>


   </Switch>
   </Router>
    </div>
  );
}

export default App;

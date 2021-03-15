import './App.css';
import { BrowerRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Login from './componenets/Login';
import Home from './componenets/Home';
import Register from './componenets/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
      </Router>
    </div>
  );
}

export default App;

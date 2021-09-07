import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

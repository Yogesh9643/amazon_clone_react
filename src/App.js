import './App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>This is checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>This is login page</h1>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

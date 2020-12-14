import './App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/checkout">
            <h1>This is checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>This is login page</h1>
          </Route>
          <Route path="/">
            <Header/>
            <h1>This is the homepage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

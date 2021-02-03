import Hello from './Components/Hello';
import Home from './Components/Home';
import MyComponent from './Components/MyComponent';
import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">

      <Router>
        <Home path="/home"/>
        <Hello path="/:id"/>
        <MyComponent path="/:var/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;

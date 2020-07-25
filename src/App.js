import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/navBarComponent/navBar';
import NavBarComponent from './components/navBarComponent/navBar';


class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBarComponent />
      </div>
    );
  }
}

export default App;

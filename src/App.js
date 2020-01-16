import React,{Component} from 'react'
//import logo from './logo.svg';
import './App.css'
import InputComponent from "./components/InputComponent";
//import ResultComponent from "./components/ResultComponent";


class App extends Component {
  render()
    {
        return (
            <div className="App">
                <InputComponent />

            </div>
        );
    }
}

export default App;

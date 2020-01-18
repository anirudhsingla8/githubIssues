import React,{Component} from "react";
import axios from 'axios';
import ResultComponent from "./ResultComponent";

class InputComponent extends Component{
    constructor() {
        super()

        this.state = {
            owner : "",
            repo : "",
        }
    }

    //here event.target.value is setting value of target to this owner
    ownerName = (event) => {
        this.setState({
            owner:event.target.value
        })
    }

    //here event.target.value is setting value of target to this repo
    repoName = (event) => {
        this.setState({
            repo:event.target.value
        })
    }




    render(){
        //let submit = this.props;
        let {items} = this.state;
        return(
            <div>
                <p>The current Owner is {this.state.owner} and the current Repo is {this.state.repo}</p>
                <input type='text' onChange={this.ownerName} value={this.state.owner} placeholder='Enter Username' className='inputFields'/>
                <br/>
                <input type='text' onChange={this.repoName} value={this.state.repo} placeholder='Enter Repository' className='inputFields'/>
                <br/>
                <br/>
                <ResultComponent {...this.state} />

            </div>
        );
    }
}

export default InputComponent;
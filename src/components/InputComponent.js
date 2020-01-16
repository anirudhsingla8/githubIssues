import React,{Component} from "react";
import axios from 'axios';
class InputComponent extends Component{
    constructor() {
        super()

        this.state = {
            owner : "",
            repo : "",
            items: [],

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

    apiFetch = () => {
        axios.get(`https://api.github.com/repos/${this.state.owner}/${this.state.repo}/issues`)
            .then(response => {
                console.log(response)
                this.setState({
                    items:response.data,

                })
            })
            .catch(error => {
                console.log(error)
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
                <input type='text' onChange={this.repoName} value={this.state.repo} placeholder='enter Repository' className='inputFields'/>
                <br/>
                <button onClick={this.apiFetch}>Fetch Results</button>
                <ul>
                    {items.map(item=>(
                        <li key={item.id}>
                           Issue-title: {item.title}
                        </li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}

export default InputComponent;
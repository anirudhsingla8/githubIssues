import React,{Component} from "react"
import axios from "axios";

import InputComponent from "./InputComponent";

class ResultComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoaded:false,
            items: []
        }
        this.apiFetch=this.apiFetch.bind(this)
    }

    apiFetch = () => {
        axios.get(`https://api.github.com/repos/${this.props.owner}/${this.props.repo}/issues`)
            .then(response => {
                console.log(response)
                this.setState({
                    items:response.data,
                    isLoaded:true
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render(){
        let {isLoaded,items} = this.state;
        if (!isLoaded){
            return(
                <div className='submit'>
                    <button onClick={this.apiFetch}>Fetch Results</button>
                            <div>
                                <p className="result">Please Enter Correct username and Repo</p>
                            </div>
                </div>
            );
        }
        return(
            <div className='submit'>
                <button onClick={this.apiFetch}>Fetch Results</button>

                    {items.map(item=>(
                            <div key={item.id}>
                                <p className="result">{item.title}</p>
                            </div>
                        )
                    )}

            </div>
        );
    }
}

export default ResultComponent
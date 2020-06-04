import React from 'react';
import { addNewUser} from  '../redux/action';
import store from '../redux/store'; 
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:false
        }
    }
    
    getUser = ()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
        })
        .then( json => {
            store.dispatch(addNewUser(json))
        })
        .catch( err => {
            err.text().then( errorMessage => {
            // this.props.dispatch(displayTheError(errorMessage))
            this.setState({
                isLoading:true
            })
            })
        })

    }
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Users</h1>
                        <p className="lead">fatching users from server using redux and working on</p>
                        <button onClick={this.getUser} className="btn btn-primary btn-sm">{!this.state.isLoading ? "Load data" :"Loading Fail, Try Again"}</button>
                    </div>
                </div>
                {   !store.getState().users ? '' :
                    <CreateCard/>
                }
            </div>
        )
    }
}

function CreateCard(){
    return(
        <div className="col-3">
            <div className="card bg-light mb-3">
                <div className="card-header">username</div>
                <div className="card-body">
                    <h5 className="card-title">name</h5>
                    <p className="card-text">company.catchPhrase at company.name</p>
                    <ul className="list-group">
                        <li className="list-group item">email</li>
                        <li className="list-group item">mobile</li>
                        <li className="list-group item">adress</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Website</small>
                </div>
            </div>
        </div>
    )
}
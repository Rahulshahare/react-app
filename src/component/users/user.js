import React from 'react';
import { addNewUser} from  '../redux/action';
import store from '../redux/store'; 
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
            users:[],
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
        store.subscribe( ()=>{
                this.setState({
                    users: store.getState().users
                })
        })
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Users</h1>
                        <p className="lead">fatching users from server using redux and working on</p>
                        <button onClick={this.getUser} className="btn btn-primary btn-sm">{!this.state.isLoading ? "Load data" :"Loading Fail, Try Again"}</button>
                    </div>
                </div>
                <div>
                {
                   
                        // console.log("Store Change", store.getState());
                        !this.state.users ? '' :
                        <CreateCard users={store.getState().users}/>
                
                    
                }
                </div>
            </div>
        )
    }
}

function CreateCard(props){
    return(
        <div>
            {
                props.users.map((user, i) =>(
                    <div key={i} className="col-3">
                        <div className="card bg-light mb-3">
                            <div className="card-header">{user.username}</div>
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.company.catchPhrase} at {user.company.name}</p>
                                <ul className="list-group">
                                    <li className="list-group item">Email : {user.email}</li>
                                    <li className="list-group item">Phone :{user.phone}</li>
                                    <li className="list-group item">Address : {user.address.suite},{user.address.street},{user.address.city}</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{user.website}</small>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
import React from 'react';
import store from '../redux/store';
import { addNewCourse, resetCourse } from '../redux/action';

/**
 * course list is only available for this component only. if this component re-render 
 * course list will be empty and initialize again.
 * so te course list wi not be available through the app.
 * To use course list data in whole app the redux is require.
 * Using Redux it is possible to make courseList available for whole app.
 * So lets get started with Redux
 */
export default class CreateCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseName:'',
            courseList:[]
        }
    }
    componentDidMount = ()=>{
        this.setState({
            courseList: store.getState()
        })
    }
    handleChange = (e) =>{
        this.setState({
            courseName:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        var a = this.state.courseName;
        if(a.length === 0){
            return;
        }
        store.dispatch( addNewCourse(a))
        console.log(store.getState());
        this.setState({
            courseList:this.state.courseList.concat(a),
            courseName:''
        })
    }
    handleReset = ()=>{
        store.dispatch(resetCourse());
        this.setState({
            courseList:[],
            courseName:''
        })
    }
    render(){
        return(
            <div className="col-6">
                
                <h4>Add New Course Here</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="course">Course</label>
                        <input type="text" onChange={this.handleChange} value={this.state.courseName} className="form-control" id="course"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" onClick={this.handleReset} className="btn btn-secondary">Reset</button>
                </form>
                <br/>
                {ListCourse(this.state.courseList)}
            </div>
        )
    }
}

function ListCourse(courses){
    // console.log(courses)
    return(
        <ul className="list-group">
                {
                    courses.map((course, i) =>(
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                            {course}
                            <span className="badge badge-danger badge-pill">delete</span>
                        </li>
                    ))
                }
        </ul>
    )
    

}
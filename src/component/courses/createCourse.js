import React from 'react';
import { connect } from 'react-redux';
// import store from '../redux/store';
import { addNewCourse, resetCourse, deleteCourse } from '../redux/action';

/**
 * course list is only available for this component only. if this component re-render 
 * course list will be empty and initialize again.
 * so te course list wi not be available through the app.
 * To use course list data in whole app the redux is require.
 * Using Redux it is possible to make courseList available for whole app.
 * So lets get started with Redux
 */
class CreateCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseName:'',
            courseList:[]
        }
    }
    componentDidMount = ()=>{
        this.setState({
            courseList: store.getState().courses
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
            courseList:store.getState().courses,
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
    handleDelete = (coursename)=>{
        console.log(coursename)
        store.dispatch(deleteCourse(coursename))
        this.setState({
            courseList: store.getState().courses
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
                {   !this.state.courseList 
                    ? ''
                    :
                    <ListCourse 
                        courses = {this.state.courseList} 
                        handleDelete = {this.handleDelete}
                    />
                }
            </div>
        )
    }
}

export default CreateCoursePage;

function ListCourse(props){
    // console.log(courses)
    return(
        <ul className="list-group">
                {
                    props.courses.map((course, i) =>(
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                            {i+1+'. '}
                            {course}
                            <button 
                                onClick={()=> props.handleDelete(course)} 
                                type="button" 
                                className="btn btn-danger btn-sm"
                            >Remove</button>
                        </li>
                    ))
                }
        </ul>
    )
    

}
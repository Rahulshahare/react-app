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
            
        }
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
       // store.dispatch( addNewCourse(a))
        this.props.addNewCourse(a)
        console.log(this.props.courses);
        
        this.setState({
            courseName:''
        })
    }
    handleReset = ()=>{
        this.props.resetCourse();
        this.setState({
            courseName:''
        })
    }
    handleDelete = (coursename)=>{
        console.log(coursename)
        this.props.deleteCourse(coursename)

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
                {   !this.props.courses
                    ? ''
                    :
                    <ListCourse 
                        courses = {this.props.courses} 
                        handleDelete = {this.handleDelete}
                    />
                }
            </div>
        )
    }
}
const mapStateToProps = (state /*,ownProps*/)=>{
    return{
        courses:state.courses
    }
}

const mapDispatchToProps = { addNewCourse, deleteCourse, resetCourse };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCoursePage);

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
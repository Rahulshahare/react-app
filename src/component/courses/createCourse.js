import React from 'react';

export default class CreateCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseName:'',
            courseList:[]
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
        this.setState({
            courseList:this.state.courseList.concat(a),
            courseName:''
        })
    }
    handleReset = ()=>{
        this.setState({
            courseList:[],
            courseName:''
        })
    }
    render(){
        return(
            <div>{ListCourse(this.state.courseList)}
                <h4>Add New Course Here</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="course">Course</label>
                        <input type="text" onChange={this.handleChange} value={this.state.courseName} className="form-control" id="course"/>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" onClick={this.handleReset} className="btn btn-secondary">Reset</button>
                </form>
            </div>
        )
    }
}

function ListCourse(courses){
    console.log(courses)
    return(
        <ul>
                {
                    courses.map(course =>(
                        <li>{course}</li>
                    ))
                }
        </ul>
    )
    

}
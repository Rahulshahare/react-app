import React from 'react';

class CreateCoursePage extends React.Component{
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
    render(){
        return(
            <div>
                <h4>Add New Course Here</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="course">Course</label>
                        <input type="text" onChange={this.handleChange} value={this.state.courseName} className="form-control" id="course"/>
                    </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCoursePage;
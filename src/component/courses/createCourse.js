import React from 'react';

class CreateCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseName:'',
            courseList:[]
        }
    }
    handleChange = (event) =>{
        this.setState({
            courseName:event.target.value
        })
    }
    handleSubmit = () =>{
        event.preventDefault()
        const a = this.state.courseList;
        a = a.push(this.state.courseName);

        this.setState({
            courseList:a
        })
    }3
    render(){
        return(
            <div>
                <h1>Add New Course Here</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="course">Course</label>
                        <input type="text" onChange={this.handleChange} class="form-control" id="course"/>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCoursePage;
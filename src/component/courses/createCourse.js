import React from 'react';

class CreateCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseName:''
        }
    }
    render(){
        return(
            <div>
                <h1>Add New Course Here</h1>
                <form >
                    <div class="form-group">
                        <label for="course">Course</label>
                        <input type="text" class="form-control" id="course"/>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateCoursePage;
import React, { Suspense } from 'react';
const CreateCoursePage = React.lazy(()=>import('./createCourse'));

function CoursePage (){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Courses</h1>
                    <p className="lead">We can Create list of Courses here</p>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <CreateCoursePage/>
            </Suspense>
        </div>
    )
}

export default CoursePage;
import React, { Suspense } from 'react';
const CreateCoursePage = React.lazy(()=>import('./createCourse'));

function CoursePage (){
    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Courses</h1>
                    <p class="lead">We can Create list of Courses here</p>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <CreateCoursePage/>
            </Suspense>
        </div>
    )
}

export default CoursePage;
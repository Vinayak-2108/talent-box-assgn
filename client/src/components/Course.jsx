import React from "react";
import "../styles/courses.css";
const Course = (props) => {
    return (
        <>
            <button className="course-box">
                <div>
                    {`${props.title} (${props.duration})`}
                </div>
            </button>
        </>
    );
};

export default Course;

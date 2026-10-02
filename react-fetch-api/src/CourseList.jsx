import { useEffect, useState } from "react";
import Course from "./Course";

function CourseList() {

    const [courses, setCourses] = useState(null);

    function handleDelete(id) {

        const newCourses = courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }
    // const courses1 = courses.sort((x, y) => x.title - y.title);

    useEffect(() => {
        console.log("Courses use Effect");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("response", response);
                return response.json();
            }
            )
            .then(data => console.log("data", data));

        fetch('http://localhost:3000/courses')
            .then(response => {
                console.log('course', response);
                return response.json();
            }
            )
            .then(data => {
                console.log("course data", data);
                setCourses(data);
            });

    }, []);

    if (!courses) {
        return (<></>);
    }

    const courseList = courses.map((course) =>

        <Course key={course.id} title={course.title} price={course.price}
            theme={course.theme} id={course.id} onDelete={handleDelete} />


    );

    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList
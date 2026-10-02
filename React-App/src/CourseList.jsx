import { useEffect, useState } from "react";
import Course from "./Course";

function CourseList() {

    const [courses, setCourses] = useState([{

        "id": 1,
        "title": "HTML",
        "price": "199",
        "theme": "html-banner"
    },
    {
        "id": 2,
        "title": "JS",
        "price": "200",
        "theme": "js-banner"
    },
    {
        "id": 3,
        "title": "CSS",
        "price": "10",
        "theme": "css-banner"
    }
    ]);

    function handleDelete(id) {

        const newCourses = courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }
    const courses1 = courses.sort((x, y) => x.title - y.title);

    useEffect(() => {
        console.log("Courses use Effect");
    }, []);


    const courseList = courses1.map((course) =>

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
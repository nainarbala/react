import Course from "./Course";

function CourseList() {

    const courses = [{

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
    ];

    const courseList = courses.map((course) =>

        <Course key={course.id} title={course.title} price={course.price}
            theme={course.theme} />


    );

    return (
        <>
            {courseList}
        </>
    );
}

export default CourseList
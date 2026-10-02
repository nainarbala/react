import Course from "./Course";
import useFetch from "./useFetch";

function CourseList() {


    const [courses, error, setCourses] = useFetch();

    function handleDelete(id) {

        const newCourses = courses.filter((course) => course.id != id);
        setCourses(newCourses);

    }
    // const courses1 = courses.sort((x, y) => x.title - y.title);



    if (!courses) {
        return (<>
            {!error && <p>Loading...</p>}

            {error && <p>{error}</p>}
        </>);
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
import { useEffect, useState } from "react";

const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);




    useEffect(() => {
        console.log("Courses use Effect");
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         console.log("response", response);
        //         return response.json();
        //     }
        //     )
        //     .then(data => console.log("data", data));


        setTimeout(() => {
            fetch('http://localhost:3000/courses')
                .then(response => {
                    if (!response.ok) {
                        throw Error('Not found');
                    }
                    console.log('course', response);
                    return response.json();
                }
                )
                .then(data => {
                    console.log("course data", data);
                    setData(data);
                }).catch((error) => {
                    console.log(error);
                    setError(error.message);
                });
        }, 1000);


    }, []);

    return [data, error, setData];
}
export default useFetch
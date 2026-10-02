import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
function Home() {

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {


        const controller = new AbortController()
        const signal = controller.signal;

        setTimeout(() => {
            fetch('http://localhost:3000/posts', { signal })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setPosts(data);
                })
                .catch((error) => {
                    setError(error.message);
                })
        }, 5000);



        return () => {
            console.log("Unmounted...");
            controller.abort();
        }
    }, []


    );

    return (

        <>
            <Link to="/login">Login</Link>

            < div className="card w-50" >
                {
                    posts && posts.map((post) => {
                        return (
                            <div key={post.id} className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        )

                    })
                }

            </div >

        </>
    );
}

export default Home
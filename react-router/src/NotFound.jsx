import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h2>Page not found</h2>
            <a href="/" className="btn btn-primary">Home</a>


            <Link to="/" className="btn btn-danger">Home</Link>
        </>
    );
}
export default NotFound
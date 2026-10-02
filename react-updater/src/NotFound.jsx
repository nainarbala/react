import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <h2>Page Not Found</h2>

            <Link to="/" className='btn btn-primary'>Home</Link>

        </>
    );
}
export default NotFound
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default NotFound

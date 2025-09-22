import React from 'react';
import "./not-found.scss"
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    return (
    <div id='not-found'>
          <div className="tt">
            404
          </div>
        <h1>Page not found</h1>
        <Link to="/">Back to home page</Link>
    </div>
  )
}

export default NotFound
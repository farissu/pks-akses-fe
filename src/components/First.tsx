 
import React from 'react';
import { Link } from 'react-router-dom';
 
function First() {
  return (
    <div className="App">
      <header className="App-header">
        <p>First components</p>
 
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
 
export default First;
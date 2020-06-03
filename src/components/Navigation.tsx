import * as React from 'react';

const Navigation : React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href = "index.html" className = "active">Home</a><span></span></li>
        <li><a href = "index.html">Projects</a><span></span></li>
        <li><a href = "index.html">Skills</a><span></span></li>
        <li><a href = "index.html">About</a><span></span></li>
        <li><a href = "index.html">Contact</a><span></span></li>
      </ul>
    </nav>
  );
}
export default Navigation;

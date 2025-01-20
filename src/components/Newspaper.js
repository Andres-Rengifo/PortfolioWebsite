import React from 'react';

function Newspaper({ id, top, left }) {
  return (
    <div className="newspaper" style={{ top, left }}>
      <img src={`assets/${id}.jpg`} alt={id} />
      <div className="content">
        <h2>{id} Project</h2>
        <p>Details about the project.</p>
      </div>
    </div>
  );
}

export default Newspaper;

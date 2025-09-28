import React from 'react';

export default function Dashboard({ selectedSpill }) {
  if (!selectedSpill) {
    return <p>Select a spill to see details.</p>;
  }

  return (
    <div>
      <h3>{selectedSpill.name}</h3>
      <p>{selectedSpill.description}</p>
      <h4>Before:</h4>
      <img src={mississippi_before} alt="Before" width="100%" />
      <h4>After:</h4>
      <img src={mississippi_after} alt="After" width="100%" />
    </div>
  );
}

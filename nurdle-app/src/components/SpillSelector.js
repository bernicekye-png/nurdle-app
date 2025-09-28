import React from 'react';

export default function SpillSelector({ spills, onSelect }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label><strong>Select a Spill:</strong></label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Select --</option>
        {spills.map((spill) => (
          <option key={spill.id} value={spill.id}>
            {spill.name} ({spill.date})
          </option>
        ))}
      </select>
    </div>
  );
}

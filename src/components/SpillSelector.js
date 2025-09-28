import React from "react";

export default function SpillSelector({ spills, onSelect }) {
  return (
    <div>
      <label htmlFor="spillSelect"><strong>Select Spill:</strong></label>
      <select
        id="spillSelect"
        onChange={(e) => onSelect(e.target.value)}
        style={{ width: "100%", marginTop: "10px" }}
      >
        <option value="">-- Choose a spill --</option>
        {spills.map((spill) => (
          <option key={spill.id} value={spill.id}>
            {spill.name}
          </option>
        ))}
      </select>
    </div>
  );
}

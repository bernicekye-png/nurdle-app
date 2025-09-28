import React, { useState, useEffect } from 'react';
import MapView from './nurdle-app/src/components/MapView';
import Dashboard from './nurdle-app/src/components/Dashboard';
import SpillSelector from './nurdle-app/src/components/SpillSelector';
import './App.css';
import spillData from './data/spills.json';

function App() {
  const [selectedSpillId, setSelectedSpillId] = useState(null);
  const selectedSpill = spillData.find(spill => spill.id === Number(selectedSpillId));

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Nurdle Spill Dashboard</h2>
        <SpillSelector spills={spillData} onSelect={setSelectedSpillId} />
        <Dashboard selectedSpill={selectedSpill} />
      </div>
      <div className="map-panel">
        <MapView selectedSpill={selectedSpill} />
      </div>
    </div>
  );
}

export default App;
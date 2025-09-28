import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function InteractiveNurdleMapPage() {
  const [selectedSpill, setSelectedSpill] = useState("");

  return (
    <>
      <NavBar />
      <div style={{ fontFamily: "'Nunito', sans-serif", padding: "20px" }}>
        {/* 🔹 Replace title/description with custom header image */}
        <img
          src="/interactive-header.png"
          alt="Interactive Nurdle Map"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />

        {/* Dropdown */}
        <label htmlFor="spill-select" style={{ fontSize: "16px", marginRight: "10px" }}>
          Select Spill:
        </label>
        <select
          id="spill-select"
          value={selectedSpill}
          onChange={(e) => setSelectedSpill(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          <option value="">-- Please choose an option --</option>
          <option value="mississippi">Mississippi River Spill</option>
        </select>

        {/* Spill info and iframe */}
        {selectedSpill === "mississippi" && (
          <>
            <iframe
              src="https://kaleidoscopic-profiterole-e4aa12.netlify.app"
              title="Mississippi River Spill Map"
              style={{
                width: "100%",
                height: "500px",
                border: "none",
                borderRadius: "16px",
                marginTop: "20px",
              }}
            />
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h2>Mississippi River Nurdle Spill</h2>
              <p>
                Four shipping containers were knocked off the container ship <i>Bianca</i> on August 2,
                2020, as unexpected winds surged on the Mississippi River. The ship then arrived at the
                Port of New Orleans' Napoleon Avenue wharf. They recovered three of the crates. However,
                the fourth container crashed into the Mississippi River while holding multiple 55-pound
                bags of polyethylene nurdles made by Dow Chemical.
              </p>
              <p>
                A few days later, the container containing the Dow bags was recovered from the river, but
                an unknown quantity of nurdles—likely tens of millions or more—were discharged into the
                environment. Three weeks after the leak, the <i>Bianca</i>'s shipping firm, CMA CGM,
                briefly began cleaning up, but it was put on hold because of storm threats. Spilled
                nurdles were driven upstream and downstream in the interim, and in the weeks that
                followed, they were visible in deposits along the Mississippi River's two banks as well
                as farther south into the Delta and, most likely, the Gulf of Mexico and beyond.
              </p>
              <p>
                <b>Address:</b> 50 Napoleon Ave, New Orleans, LA 70115
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

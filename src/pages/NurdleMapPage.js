import React, { useState } from "react";
import NavBar from "../components/NavBar";

export default function NurdleMapPage() {
  const [selectedSpill, setSelectedSpill] = useState("");

  return (
    <>
      <NavBar />

      <div style={{ fontFamily: "'Nunito', sans-serif", padding: "20px" }}>
        {/* 🔹 Replace old title/description with an image header */}
        <img
          src="/confidence-header.png"
          alt="Confidence Scores: Interactive Nurdle Map"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />

        {/* Dropdown to select spills */}
        <label htmlFor="spill-select" style={{ marginRight: "10px" }}>
          Select Spill:
        </label>
        <select
          id="spill-select"
          value={selectedSpill}
          onChange={(e) => setSelectedSpill(e.target.value)}
        >
          <option value="">-- Please choose an option --</option>
          <option value="mississippi">Mississippi River Spill</option>
        </select>

        {/* Show Mississippi case study when selected */}
        {selectedSpill === "mississippi" && (
          <>
            <iframe
              src="https://illustrious-cucurucho-4415bd.netlify.app/"
              title="Mississippi River Spill Map"
              style={{
                width: "100%",
                height: "500px",
                border: "none",
                marginTop: "20px",
                borderRadius: "8px",
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
              <h2 style={{ fontFamily: "'Playfair Display', serif" }}>
                Mississippi River Nurdle Spill
              </h2>
              <p>
                Four shipping containers were knocked off the container ship{" "}
                <i>Bianca</i> on August 2, 2020, as unexpected winds surged on
                the Mississippi River. The ship then arrived at the Port of New
                Orleans' Napoleon Avenue wharf. They recovered three of the
                crates. However, the fourth container crashed into the
                Mississippi River while holding multiple 55-pound bags of
                polyethylene nurdles made by Dow Chemical.
              </p>
              <p>
                A few days later, the container containing the Dow bags was
                recovered from the river, but an unknown quantity of
                nurdles—likely tens of millions or more—were discharged into the
                environment. Three weeks after the leak, the <i>Bianca</i>'s
                shipping firm, CMA CGM, briefly began cleaning up, but it was
                put on hold because of storm threats. Spilled nurdles were
                driven upstream and downstream in the interim, and in the weeks
                that followed, they were visible in deposits along the
                Mississippi River's two banks as well as farther south into the
                Delta and, most likely, the Gulf of Mexico and beyond.
              </p>
              <p>
                <b>Address:</b> 50 Napoleon Ave, New Orleans, LA 70115
              </p>
            </div>
          </>
        )}

        {/* 🔹 Prediction explanation section (always visible, now BELOW the map popup) */}
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            lineHeight: "1.6",
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            What if we can predict nurdle spills?
          </h2>
          <p>
            With the AIS risk level analysis, manufacturer and AIS risk level correlation, and
            environmental factors, a confidence score was calculated to assess the likelihood of a
            spill occurring or having already occurred in a target location. The algorithm received a
            high confidence score of <b>95%</b>, accurately predicting nurdle spills.
          </p>
          <p>
            Using the high-risk data from the previous files, it was analyzed whether high-risk ships
            had passed through the area in question. The confidence score was derived based on several
            factors, including the proximity to high-risk ship routes, the presence of past spills, and
            environmental influences such as wind patterns and ocean currents. Environmental data from
            NOAA, in conjunction with wind maps, was utilized to identify.
          </p>
          <p>
            After extensive coding on Google Colab, the resulting file incorporated various factors to
            establish a three-tiered system categorizing probability into high, medium, and low levels.
            To measure the probability and confidence scores, tools such as Google Colab, Pandas,
            NumPy, and KDTree were employed.
          </p>
          <p>
            Pandas, NumPy, and KDTree are essential tools used in the nurdle prediction algorithm,
            which focuses on handling geospatial data, analyzing environmental data, and predicting
            spill patterns. Pandas is a Python library that facilitates data manipulation and analysis,
            providing DataFrames similar to tables in Excel. It allows for processing in nurdle spill
            data, including timestamps, locations, and environmental factors.
          </p>
          <p>
            Pandas were used to read CSV files containing historical spill records and AIS (Automatic
            Identification System) ship movement data, clean and filter datasets to remove errors, and
            aggregate nurdle movement data to analyze trends over time. On the other hand, NumPy is a
            numerical computing library that enhances the performance of operations on large arrays and
            matrices. It also helps in handling large datasets efficiently, converting Pandas
            DataFrames into NumPy arrays for faster processing. Lastly, KDTree, a spatial data
            structure from SciPy, plays a crucial role in speeding up nearest-neighbor searches. This
            would be for identifying the ship’s movement from the plastic manufacturers. NumPy and
            KDTree were specifically utilized to enhance the program’s efficiency by eliminating the
            need for loops, which could otherwise slow down processing times. This approach ensured
            that the calculations were performed in a streamlined and timely manner.
          </p>
          <p>
            The real-world applications of this research are substantial. Providing early detection of
            likely spill locations, enables more efficient deployment of cleanup crews, allowing them
            to address affected areas before nurdles can spread. Additionally, this research empowers
            scientists and policymakers to concentrate resources on high-risk or vulnerable zones,
            minimizing potential environmental damage.
          </p>
          <p>
            The confidence score calculation for the spillage of the <b>Mississippi River</b> is an
            instance of the algorithm at work.
          </p>
        </div>
      </div>
    </>
  );
}

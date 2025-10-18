import React from "react";
import NavBar from "../components/NavBar"; // ✅ Import NavBar

export default function AdvocacyPage() {
  return (
    <>
      <NavBar /> {/* ✅ Render NavBar */}
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          padding: "40px",
          lineHeight: "1.6",
        }}
      >
        {/* 🖼️ Add image here */}
        <img
          src="/advocacy_banner.png" // 
          alt="Community Advocacy"
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        />

        {/* 🧹 Removed “Advocacy & Solutions” header */}
        <p>
          Plastic nurdles are a huge environmental threat, but there are practical
          solutions. Here are resources and cleanup initiatives you can explore:
        </p>

        <h2>🛠️ Cleanup Initiatives</h2>
        <ul>
          <li>
            <strong>Nurdle Patrol:</strong> Citizen-science effort for monitoring
            and collecting nurdles.{" "}
            <a
              href="https://nurdlepatrol.org"
              target="_blank"
              rel="noreferrer"
            >
              Visit here
            </a>
          </li>
          <li>
            <strong>Break Free From Plastic:</strong> Global movement to reduce
            plastic waste.{" "}
            <a
              href="https://www.breakfreefromplastic.org/"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </li>
        </ul>

        <h2>📚 Resources</h2>
        <ul>
          <li>
            <a
              href="https://oceanconservancy.org/trash-free-seas/"
              target="_blank"
              rel="noreferrer"
            >
              Ocean Conservancy: Trash Free Seas
            </a>
          </li>
          <li>
            <a
              href="https://plasticpollutioncoalition.org/"
              target="_blank"
              rel="noreferrer"
            >
              Plastic Pollution Coalition
            </a>
          </li>
        </ul>

        <h2>🌎 How You Can Help</h2>
        <ul>
          <li>Organize local beach cleanups focused on microplastics.</li>
          <li>Support legislation regulating pellet transport.</li>
          <li>Promote reusable alternatives to plastics.</li>
        </ul>
      </div>
    </>
  );
}

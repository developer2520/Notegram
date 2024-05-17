import React from "react";
import Sidebar from "./sidebar.jsx";
import RealNotes from "../pages/dashboard/realnotes.jsx";

export default function allnotes() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <RealNotes />
      </div>
    </div>
  );
}

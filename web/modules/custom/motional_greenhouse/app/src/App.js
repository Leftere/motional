import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import JobListing from "./pages/JobListing";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import "./fontloader";
import "./styles/screen.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<JobListing />} />
        <Route path="/:jobId" element={<JobDetail />} />
        <Route path="/:jobId/apply" element={<JobApplication />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

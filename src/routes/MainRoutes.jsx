import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutMePage from "../pages/AboutMePage";
import ResumePage from "../pages/ResumePage";
import ContactsPage from "../pages/ContactsPage";
import ProjectsPage from "../pages/ProjectsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default MainRoutes;

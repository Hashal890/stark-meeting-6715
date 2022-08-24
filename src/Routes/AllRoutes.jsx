import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

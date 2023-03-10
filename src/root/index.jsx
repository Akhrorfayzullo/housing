import React from "react";
import { BrowserRouter, Route,Navigate, Routes } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>home</h1>} />
        <Route path="/properties" element={<h1>properties</h1>} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

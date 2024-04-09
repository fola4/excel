import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import Team from "./pages/Team.jsx";
import Membership from "./pages/Membership.jsx";
import About from "./pages/About.jsx";
import App from "./layout/App.jsx";
import "./index.css";
import ThankYou from "./pages/ThankYou.jsx";

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="gallery" element={<Team />} />
      <Route path="membership" element={<Membership />} />
      <Route path="about us" element={<About />} />
      <Route path="thank-you" element={<ThankYou />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

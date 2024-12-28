import React from "react";
import { Routes, Route } from "react-router-dom";
import Tour from "../pages/Tour/Tour";
import HotelDetail from "../pages/Details/HotelDetails";
import TripsDetailsPage from "../pages/TripsDetailsPage/TripsDetailsPage";
import Contact from "../pages/Contact/Contact";
import BookingPage from "../pages/BookingPage/BookingPage";
import Home from "../pages/Home/Home";
import Guides from "../pages/Guides/Guides";
import Login from "../pages/Login/loginForm";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="Hotels_/#/Guides" element={<Guides />} />
      <Route path="Hotels_/#/" element={<Home />} />
      <Route path="Hotels_/#/Tour" element={<Tour />} />
      <Route path="Hotels_/#/HotelDetails" element={<HotelDetail />} />
      <Route path="Hotels_/#/TripsDetailsPage/:id" element={<TripsDetailsPage />} />
      <Route path="Hotels_/#/Contact" element={<Contact />} />
      <Route path="Hotels_/#/BookingPage" element={<BookingPage />} />
      <Route path="Hotels_/#/Login" element={<Login />} />
    </Routes>
  );
}

export default RoutesConfig;


export default RoutesConfig;

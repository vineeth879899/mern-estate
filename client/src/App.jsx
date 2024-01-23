import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinIn from "./pages/SinIn";
import SinOut from "./pages/SinOut";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sinin" element={<SinIn></SinIn>}></Route>
        <Route path="/sinout" element={<SinOut></SinOut>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/listing/:listingId" element={<Listing></Listing>}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/create-listing" element={<CreateListing></CreateListing>}></Route>
          <Route path="/update-listing/:listingId" element={<UpdateListing></UpdateListing>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

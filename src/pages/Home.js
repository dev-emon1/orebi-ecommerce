import React from "react";
import Banner from "../components/Layout/Banner";
import AdditionalInfo from "../components/Layout/AdditionalInfo";
import Advertise from "../components/Layout/Advertise";
import NewArrival from "../components/Layout/NewArrival";
import BestSeller from "../components/Layout/BestSeller";
import MiddleAdvertisement from "../components/Layout/MiddleAdvertisement";
import OfferProducts from "../components/Layout/OfferProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
      <BestSeller />
      <MiddleAdvertisement />
      <OfferProducts />
    </>
  );
};

export default Home;

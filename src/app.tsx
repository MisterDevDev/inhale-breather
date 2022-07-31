import React, { useState } from "react";
import Navigation from "./Navigation";
import MainPage from "./landing/MainPage";
import ContactModal from "./landing/ContactModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navigation setShowModal={setShowModal} />
      <ContactModal show={showModal} handleClose={handleCloseModal} />
      <MainPage />
    </>
  );
};

export default App;

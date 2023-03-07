import React, { useEffect, useState } from "react";
import Modal from "./Modal";
const NftCards = ({ data, array, modalPopUp, resetArray }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showModal ? "hidden" : "auto";
    }
  }, [showModal]);
  return (
    <>
      {showModal && (
        <div>
          <Modal
            array={array}
            setShowModal={setShowModal}
            resetArray={resetArray}
          />
        </div>
      )}
      <div className="card-grid">
        {data &&
          data.map((val, idx) => (
            <div className="card" key={idx}>
              <img src={val.image_preview_url} alt="Image not provided by API" />
              
              {val?.name ? (
                <p>{val?.name} </p>
              ): (
                <p>Name not provided by the API</p>
              )}
              {val?.description ? (
                <span>{val?.description?.substring(0, 40)}...</span>
              ) : (
                <span>Description not provided by the API</span>
              )}
              
              <button
                onClick={() => {
                  modalPopUp(val.id);
                  setShowModal(true);
                }}
              >
                More details
              </button>
            </div>
          ))}
      </div>
      {showModal && (
        <div
          className="cover"
          onClick={() => {
            setShowModal(false);
            resetArray();
          }}
        ></div>
      )}
    </>
  );
};

export default NftCards;

import React from "react";

const Modal = ({ array }) => {
  return (
    <div>
      {array &&
        array.map((val) => (
          <div className="modal">
            <div className="left">
              <img src={val?.image_preview_url} alt="" />
              <div className="details-container">
                <div className="details">
                  <h3>Owners address</h3>
                  <p>{val.creator.address}</p>
                </div>
              </div>
            </div>
            <div className="right">
              <h1>Description</h1>
              {val.description ? (
                <p>{val?.description}</p>
              ) : (
                <p>The creator doesn't have any description about this NFT</p>
              )}
            </div>
            <button onClick={() => window.open(val.permalink)}>Purchase</button>
          </div>
        ))}
    </div>
  );
};

export default Modal;

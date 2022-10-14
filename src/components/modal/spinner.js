import React from "react";
import Modal from "./Modal";

const SpinnerLoading = () => {
  return (
    <Modal>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </Modal>
  );
};

export default SpinnerLoading;

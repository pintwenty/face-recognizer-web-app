import React from "react";
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 light-blue">
        {"This app lets you choose an image and it detects faces"}
      </p>
      <p id="no" className="f4 light-blue" />
      <div className="center">
        <div className="fa4 br3 w-50 shadow-4">
          <input
            className="f4 pa2 w-70 "
            type="text"
            onChange={onInputChange}
          />
          <button
            className="f4 pa2 w-30 grow link pv2 dib white bg-black "
            onClick={onButtonSubmit}
          >
            Detect Face
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default ImageLinkForm;

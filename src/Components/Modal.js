import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Welcome to the online drawing tool </h1>
          <h2><b>please follow the instructions to use the drawing tool</b></h2>

          <div className="message">
          <h3><b> *  select line  to draw line, you can select color for lines </b> </h3>
          <h3><b> *  select rectange  to draw ractangle, you can select color  fill option</b> </h3>
          <h3><b> *  select pencil for pencil drawing </b> </h3>
          <h3><b> *  select text to write characters   </b> </h3>
          <h3><b> *  use undo and redo for going backword or forward  </b> </h3>
          <h3><b> *  select move option then select any element to move elements </b></h3>
          <h3><b> *  select  remove option then select any  element to delete elements  </b></h3>
          
          </div>
         
        </div>
        <div className="body">
           
        
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
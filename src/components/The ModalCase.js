import React from "react";

export default function ModalCase({ setIsOpen, film }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal1"
        className="modal"
        style={{
          display: "block",
          top: "5%",
          backgroundColor: "rgb(255,182,193)",
        }}
      >
        <div
          className="modal-content"
          style={{ backgroundColor: "rgb(255,182,193)" }}
        >
          <div style={{ textAlign: "right" }}>
            {/* <button
              style={{
                backgroundColor: "white",
                fontSize: "20px",
                color: "black",
                width: "20px",
                height: "20px",
                marginBottom: "10px",
              }}
            >
              X
            </button> */}
            <button
              style={{
                marginBottom: "8px",
                color: "#000",

                "border-radius": "5px",
                border: "none",
              }}
            >
              X
            </button>
          </div>

          <p>
            <iframe
              width="100%"
              height="400px"
              src={film.clip}
              title={film.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </p>
        </div>
      </div>
    </div>
  );
}

 import { useState } from "react";

function Dynamic()  {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="app-container">
      {/* Button to open detail box */}
      <button
        className="btn btn-primary"
        onClick={() => setShowDetail(true)}
      >
        Show Detail
      </button>

      {/* Overlay + Detail Box */}
      {showDetail && (
        <div className="overlay">
          <div className="detail-box">
            <h2>Detail Box</h2>
            <p>This is the detail content. Background is blurred.</p>
            <button
              className="btn btn-danger"
              onClick={() => setShowDetail(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



export default Dynamic;

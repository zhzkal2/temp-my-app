import React from "react";
import "../styles/Components/preloader.css";

const Preloader: React.FC = () => {
  return (
    <div className="preloader-overlay" role="presentation" aria-hidden="true">
      <div className="preloader">
        <div
          className="spinner"
          role="progressbar"
          aria-busy="true"
          aria-label="Loading content..."
        ></div>
      </div>
    </div>
  );
};

export default Preloader;

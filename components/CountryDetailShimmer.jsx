import React from "react";

export default function CountryDetailShimmer() {
  return (
    <main>
  <div className="country-details-container">
    <div className="back-button shimmer shimmer-button"></div>

    <div className="country-details">
      <div className="shimmer shimmer-flag"></div>

      <div className="details-text-container">
        <div className="shimmer shimmer-title"></div>
        <div className="details-text">
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
          <div className="shimmer shimmer-line"></div>
        </div>

        <div className="border-countries">
          <div className="shimmer shimmer-border-tag"></div>
          <div className="shimmer shimmer-border-tag"></div>
          <div className="shimmer shimmer-border-tag"></div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}

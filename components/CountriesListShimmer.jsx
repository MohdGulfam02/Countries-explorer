import React from "react";
import './Shimmer.css'

export default function CountriesListShimmer() {
    return (
        <div className="shimmer-cards-grid">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="shimmer-card shimmer">
                <div className="shimmer shimmer-image" />
                <div className="shimmer shimmer-line" />
                <div className="shimmer shimmer-line short" />
                <div className="shimmer shimmer-line medium" />
              </div>
            ))}
        </div>
      );
}

import React from "react";

const FeaturedHouse = ({ house }) =>
  house ? (
    <div>
      <div className="row featuredHouse">
        <h3 className="col-md-12 text-center">Featured house</h3>
      </div>
    </div>
  ) : (
    <div>No featured house at this time</div>
  );

export default FeaturedHouse;

import React from "react";
import { Image, Grid } from "@nextui-org/react";

function Posted({video}) {
  return (
    <div className="relative flex">
      <Grid>
        <video src={video} controls>
          Your browser does not support the video tag.
        </video>
      </Grid>
    </div>
  );
}

export default Posted;



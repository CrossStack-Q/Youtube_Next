import React from "react";
import { Image, Grid,Card } from "@nextui-org/react";

function PostedMain({ video,image, title }) {
  return (
    <div className="relative flex">
      <Grid>
        {/* <div className="">
          <video src={video} controls width="360px" height="auto"></video>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-white">{title}</p>
        </div> */}
        <Card css={{ p: "$6", mw: "400px",backgroundColor: "#1D1F22",border: "#1D1F22" }} variant = 'flat'>
      <Card.Header>
        {/* <img
          alt="nextui logo"
          src={image}
          width="340px"
          height="300px"
        /> */}
        <video src={video} controls width="360px" height="auto"></video>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <p>
          {title}
        </p>
      </Card.Body>
    </Card>
      </Grid>
    </div>
  );
}

export default PostedMain;

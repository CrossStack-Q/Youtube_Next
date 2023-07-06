import React from 'react'
import { useRouter } from 'next/router';
import UploadVid from "../components/UploadedVid/UploadVid"

function Video() {
  return (
    <div>
        <UploadVid />
    </div>
  )
}

export default Video

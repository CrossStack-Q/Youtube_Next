import React from "react";
import { useState, useEffect, useRef } from "react";
import Posted from "./Posted";
import styles from '../../styles/UploadVid.module.css'

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { Grid,Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

function UploadVid() {
  const { data: session } = useSession();

  const router = useRouter();
  const [youtubeq, setVideos] = useState([])

  useEffect(() => {
    return onSnapshot(query(collection(db, 'youtubeq', `${session?.user?.email}`, `${session?.user?.email}`), orderBy('timestamp', 'desc')), snapshot => {
      setVideos(snapshot.docs);
    });

  }, [db])

  function UploadPage() {
    router.push('/upload')
  }







  return (
    <div className={styles.feed}>
      <Button onClick={UploadPage} auto color="error">
        Upload more
      </Button>
      <Grid.Container gap={1}>
        {youtubeq.map((youtubeq) => (
          <Posted
            key={youtubeq.data().username}
            video={youtubeq.data().video}
          />
        ))}
      </Grid.Container>
      Hello
    </div>
  );
}

export default UploadVid;
